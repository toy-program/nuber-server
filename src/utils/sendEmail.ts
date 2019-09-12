import * as Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
	apiKey: process.env.MAILGUN_TOKEN || "",
	domain: process.env.MAILGUN_DOMAIN || ""
});

const sendEmail = (subject: string, html: string, to: string) => {
	const emailData = {
		from: "changhoi0522@gmail.com",
		to,
		subject,
		html
	};

	return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (
	fullName: string,
	key: string,
	to: string = "changhoi0522@gmail.com"
) => {
	const emailSubject = `Hello ${fullName}, please verify your email`;
	const emailBody = `Verify your email by clicking <a href="${process.env
		.DOMAIN ||
		"http://localhost:4001"}/verfication/${key}">HERE</a> http://localhost:4001/verification/${key}`;
	return sendEmail(emailSubject, emailBody, to);
};
