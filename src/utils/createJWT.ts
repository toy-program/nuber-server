import jwt = require("jsonwebtoken");

const createJWT = (id: number): string => {
	const token = jwt.sign(
		{
			id
		},
		process.env.JSON_SECRET || "secret"
	);
	return token;
};

export default createJWT;
