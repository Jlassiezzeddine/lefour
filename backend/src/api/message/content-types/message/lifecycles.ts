import _ from "lodash";
import messageEmailTemplate from "../../../../emailTemplates/messageEmailTemplate";

export default {
  async afterCreate(event) {
    const { result: message } = event;
    console.log("message", message);

    const emailTemplate = {
      subject:
        "Message from : <%= message.firstName %> <%= message.lastName %>",
      text: `
        Thank you for reaching out to us through our website form.

        While we process your inquiry, I kindly ask for your patience and understanding. Depending on the complexity of your question or request, it may take a short while for us to gather the necessary information or consult with the appropriate individuals to provide you with a comprehensive response.
        
        Warm regards,
        Hatem Gabsi, CEO Le Four Studio
        `,
      html: messageEmailTemplate,
    };
    try {
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: "lefourmaster@gmail.com",
          // from: is not specified, the defaultFrom is used.
        },
        emailTemplate,
        {
          message: _.pick(message, [
            "phone",
            "email",
            "firstName",
            "lastName",
            "message",
          ]),
        }
      );
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: message.email,
          from: "Le Four Studio",
          subject: "Re: Inquiry via lefourstudio.com",
        },
        emailTemplate,
        {
          message: _.pick(message, [
            "phone",
            "email",
            "firstName",
            "lastName",
            "message",
          ]),
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
