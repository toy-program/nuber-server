import twilio = require("twilio");

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const sendSMS = (to: string, body: string) => {
	return twilioClient.messages.create({
		body,
		to,
		from: process.env.TWILIO_NUMBER
	});
};

export const sendVerificationSMS = (to: string, key: string) =>
	sendSMS(to, `Your verification key is ${key}`);
