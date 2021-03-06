import { GraphQLServer } from "graphql-yoga";
import * as cors from "cors";
import * as logger from "morgan";
import * as helmet from "helmet";
import schema from "./schema";
import express = require("express");
import decodeJWT from "./utils/decodeJWT";

class App {
	public app: GraphQLServer;
	constructor() {
		this.app = new GraphQLServer({
			schema,
			context: req => ({ req: req.request })
		});
		this.middlewares();
	}

	private middlewares = (): void => {
		this.app.express.use(cors());
		this.app.express.use(helmet());
		this.app.express.use(logger("dev"));
		this.app.express.use(this.jwtMiddleware);
	};

	private jwtMiddleware = async (
		req,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		const token = req.get("X-JWT");
		if (token) {
			const user = await decodeJWT(token);
			if (user) {
				req.user = user;
				next();
			}
		}
		next();
	};
}

export default new App().app;
