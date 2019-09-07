import { Resolvers } from "../../../types/resolvers";
import {
	FacebookConnectMutationArgs,
	FacebookConnectResponse
} from "../../../types/graph";
import User from "../../../entities/User.entity";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
	Mutation: {
		FacebookConnect: async (
			_,
			args: FacebookConnectMutationArgs
		): Promise<FacebookConnectResponse> => {
			const { facebookId } = args;
			try {
				const existUser = await User.findOne({ facebookId });
				if (existUser) {
					const token = createJWT(existUser.id);
					return {
						ok: true,
						error: null,
						token
					};
				}
			} catch (e) {
				return {
					ok: false,
					error: e.message,
					token: null
				};
			}

			try {
				const newUser = await User.create({
					...args,
					profilePhoto: `http://graph.facebook.com/${facebookId}/picture?type=square`
				}).save();
				const token = createJWT(newUser.id);
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
