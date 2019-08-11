import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
	type: "postgres",
	database: "nuber",
	synchronize: true,
	logging: true,
	entities: [__dirname + "entities/*.entity{.ts,.js}"],
	host: process.env.DB_ENDPOINT || "localhost",
	port: 5432,
	username: process.env.DB_USERNAME || "goorm",
	password: process.env.DB_PASSWORD || ""
};

export default connectionOptions;
