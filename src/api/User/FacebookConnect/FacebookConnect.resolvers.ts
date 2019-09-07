import { Resolvers } from "../../../types/resolvers";
import {
	FacebookConnectMutationArgs,
	FacebookConnectResponse
} from "../../../types/graph";
import User from "../../../entities/User.entity";

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
					return {
						ok: true,
						error: null,
						token: "Coming soon"
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
				await User.create({
					...args,
					profilePhoto: `http://graph.facebook.com/${facebookId}/picture?type=square`
				}).save();
				return {
					ok: true,
					error: null,
					token: "Coming soon"
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
