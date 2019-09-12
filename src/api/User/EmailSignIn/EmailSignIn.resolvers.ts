import { Resolvers } from "../../../types/resolvers";
import {
	EmailSignInMutationArgs,
	EmailSignInResponse
} from "../../../types/graph";
import User from "../../../entities/User.entity";
import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
	Mutation: {
		EmailSignIn: async (
			_,
			args: EmailSignInMutationArgs
		): Promise<EmailSignInResponse> => {
			const { email, password } = args;
			try {
				const user = await User.findOne({ email });
				if (!user) throw new Error("No User found with that Email");
				if (!user.verifiedEmail) throw new Error("Verify your email first");
				const checkPassword = await user.comparePassword(password);
				if (!checkPassword) throw new Error("Wrong Password");

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
