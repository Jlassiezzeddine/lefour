import _ from "lodash";
import messageToSender from "../../../../emailTemplates/messageToSender";
import messageToMaster from "../../../../emailTemplates/messageToMaster";

export default {
  async afterCreate(event) {
    const { result: message } = event;

    const emailTemplateToSender = {
      subject: "Thanks for reaching out!",
      text: `
        Depending on the complexity of your question or request, it may take a short while for us to gather the necessary information or consult with the appropriate individuals to provide you with a comprehensive response.
        `,
      html: messageToSender,
    };
    const emailTemplateToMaster = {
      subject:
        "Message from : <%= message.firstName %> <%= message.lastName %>",
      text: `
        New message via lefourstudio.com
        Full Name : <%= message.firstName %> <%= message.lastName %>
        Phone : <%= message.phone %> 
        Email : <%= message.email %> 

        -
        
        Message : <%= message.message %> 
        `,
      html: messageToMaster,
    };
    try {
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: "lefourmaster@gmail.com",
          // from: is not specified, the defaultFrom is used.
        },
        emailTemplateToMaster,
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
        emailTemplateToSender,
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
