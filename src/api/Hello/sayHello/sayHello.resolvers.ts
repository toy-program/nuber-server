import { SayHelloResponse, SayHelloQueryArgs } from "src/types/graph";

const resolver = {
	Query: {
		sayHello: (_: any, args: SayHelloQueryArgs): SayHelloResponse => ({
			error: false,
			text: `Hello ${args.name}`
		})
	}
};

export default resolver;
