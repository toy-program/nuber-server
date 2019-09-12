import { Resolvers } from "../../../types/resolvers";
import { authResolver } from "../../../utils/resolverMiddleware";
import User from "../../../entities/User.entity";
import {
	CompleteEmailVerificationMutationArgs,
	CompleteEmailVerificationResponse
} from "../../../types/graph.d";
import Verification from "../../../entities/Verification.entity";

const resolvers: Resolvers = {
	Mutation: {
		CompleteEmailVerification: authResolver(
			async (
				_,
				args: CompleteEmailVerificationMutationArgs,
				{ req }
			): Promise<CompleteEmailVerificationResponse> => {
				const user: User = req.user;
				const { key } = args;
				try {
					const verification = await Verification.findOne({
						key,
						payload: user.email,
						target: "EMAIL",
						purpose: "PROFILE"
					});
					if (!verification) throw new Error("Wrong Email");
					if (verification.verified) throw new Error("Already verified Email");

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
		)
	}
};

export default resolvers;
