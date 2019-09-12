import { Resolvers } from "../../../types/resolvers";
import {
	CompletePhoneVerificationMutationArgs,
	CompletePhoneVerificationResponse
} from "../../../types/graph";
import Verification from "../../../entities/Verification.entity";
import User from "../../../entities/User.entity";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
	Mutation: {
		CompletePhoneVerification: async (
			_,
			args: CompletePhoneVerificationMutationArgs
		): Promise<CompletePhoneVerificationResponse> => {
			const { phoneNumber, key } = args;
			try {
				const verification = await Verification.findOne({
					payload: phoneNumber,
					target: "PHONE",
					purpose: "SIGNUP",
					key
				});
				if (!verification) throw new Error("Verification key is not valid");

				const user = await User.findOne({ phoneNumber });
				if (user) throw new Error("This phone number is already used");

				verification.verified = true;
				verification.save();

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
