import { Resolvers } from "../../../types/resolvers";
import {
	StartPhoneVerificationMutationArgs,
	StartPhoneVerificationResponse
} from "../../../types/graph";
import Verification from "../../../entities/Verification.entity";

const resolvers: Resolvers = {
	Mutation: {
		StartPhoneVerification: async (
			_,
			args: StartPhoneVerificationMutationArgs
		): Promise<StartPhoneVerificationResponse> => {
			const { phoneNumber } = args;
			try {
				const existVerification = await Verification.findOne({
					payload: phoneNumber
				});
				if (existVerification) {
					existVerification.remove();
				}
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
