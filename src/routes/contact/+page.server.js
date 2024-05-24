import { GOOGLE_EMAIL , GOOGLE_EMAIL_TO, GOOGLE_EMAIL_BCC} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get("to");
            const subject = formData.get("subject");
            const body = formData.get("body");
            console.log(body);
            let html = `<h2>From: ${email}</h2><pre>${body}</pre>`;

            if(subject.trim() == "") throw "empty";

            const message = {
                from: GOOGLE_EMAIL,
                to: GOOGLE_EMAIL_TO,
                // bcc: GOOGLE_EMAIL_BCC,
                subject: subject,
                text: body,
                html: html,
            };

            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email has been sent!",
            };
        } catch (error) {
            console.error(error);
        }
    }
};