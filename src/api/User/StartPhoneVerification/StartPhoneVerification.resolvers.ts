import { Resolvers } from "../../../types/resolvers";
import {
	StartPhoneVerificationMutationArgs,
	StartPhoneVerificationResponse
} from "../../../types/graph";
import Verification from "../../../entities/Verification.entity";
import { sendVerificationSMS } from "../../../utils/sendSMS";

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

				const newVerification = await Verification.create({
					payload: phoneNumber,
					target: "PHONE"
				}).save();
				await sendVerificationSMS(newVerification.payload, newVerification.key);

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
