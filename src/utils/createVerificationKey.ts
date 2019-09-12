export const createPhoneKey = () =>
	Math.floor(Math.random() * 100000).toString();

export const createEmailKey = () =>
	Math.random()
		.toString(36)
		.substring(2);
