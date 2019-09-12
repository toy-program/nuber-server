import { Resolvers } from "../../../types/resolvers";
import {
	EmailSignUpMutationArgs,
	EmailSignUpResponse
} from "../../../types/graph";
import User from "../../../entities/User.entity";
import Verification from "../../../entities/Verification.entity";
import { sendVerificationEmail } from "../../../utils/sendEmail";

const resolvers: Resolvers = {
	Mutation: {
		EmailSignUp: async (
			_,
			args: EmailSignUpMutationArgs
		): Promise<EmailSignUpResponse> => {
			const { email } = args;
			try {
				const existUser = await User.findOne({ email });
				if (existUser) throw new Error("Already used email");

				const phoneVerification = await Verification.findOne({
					payload: args.phoneNumber,
					verified: true
				});
				if (!phoneVerification)
					throw new Error("You haven't verified your phone number");

				const newUser = await User.create({ ...args });
				newUser.save();

				const emailVerification = await Verification.create({
					payload: newUser.email,
					target: "EMAIL"
				}).save();
				await sendVerificationEmail(
					newUser.fullName,
					emailVerification.key,
					newUser.email
				);

				return {
					ok: true,
					error: null
				};
			} catch (e) {
				return {
					ok: false,
					error: e.message
				};
			}
		}
	}
};

export default resolvers;
