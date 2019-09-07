import User from "../entities/User.entity";
import jwt = require("jsonwebtoken");

const decodeJWT = async (token: string): Promise<User | undefined> => {
	try {
		const verified: any = jwt.verify(token, process.env.JSON_TOKEN || "secret");
		const { id } = verified;
		const user = await User.findOne({ id });
		return user;
	} catch (e) {
		return undefined;
	}
};

export default decodeJWT;
