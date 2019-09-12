import { Resolvers } from "../../../types/resolvers";
import { authResolver } from "../../../utils/resolverMiddleware";
import { User, RequestEmailVerificationResponse } from "../../../types/graph.d";
import Verification from "../../../entities/Verification.entity";
import { createEmailKey } from "../../../utils/createVerificationKey";
import { sendVerificationEmail } from "../../../utils/sendEmail";

const resolvers: Resolvers = {
	Mutation: {
		RequestEmailVerification: authResolver(
			async (_, __, { req }): Promise<RequestEmailVerificationResponse> => {
				try {
					const user: User = req.user;
					let verification = await Verification.findOne({
						payload: user.email,
						target: "EMAIL",
						purpose: "PROFILE"
					});

					if (!verification) {
						verification = await Verification.create({
							payload: user.email,
							target: "EMAIL",
							purpose: "PROFILE"
						});
					} else {
						verification.key = createEmailKey();
						verification.verified = false;
						verification.save();
					}

					await sendVerificationEmail(
						user.fullName,
						verification.key,
						user.email
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
		)
	}
};
