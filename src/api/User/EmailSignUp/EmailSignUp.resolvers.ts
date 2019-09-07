import { Resolvers } from "../../../types/resolvers";
import {
	EmailSignUpMutationArgs,
	EmailSignInResponse
} from "../../../types/graph";
import User from "../../../entities/User.entity";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
	Mutation: {
		EmailSignUp: async (
			_,
			args: EmailSignUpMutationArgs
		): Promise<EmailSignInResponse> => {
			const { email } = args;
			try {
				const existUser = await User.findOne({ email });
				if (existUser) throw new Error("Already used email");

				const newUser = await User.create({ ...args }).save();
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
