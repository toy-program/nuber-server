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
				const verfication = await Verification.findOne({
					payload: phoneNumber,
					key
				});
				if (!verfication) throw new Error("Verification key is not valid");

				const user = await User.findOne({ phoneNumber });
				if (!user) throw new Error("There is no user with that phone number");

				user.verifiedPhonenNumber = true;
				user.save();

				const token = createJWT(user.id);
				return {
					ok: true,
					error: null,
					token
				};
			} catch (e) {
				return {
					ok: false,
					error: e.message,
					token: null
				};
			}
		}
	}
};

export default resolvers;
