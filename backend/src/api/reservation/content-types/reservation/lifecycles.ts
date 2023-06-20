import _ from "lodash";
import requestToMaster from "../../../../emailTemplates/requestToMaster";
import requestToSender from "../../../../emailTemplates/requestToSender";

export default {
  async afterCreate(event) {
    const { result: request, params } = event;
    const emailTemplateToSender = {
      subject: "Thank you for your quote request!",
      text: `
      Dear <%=request.firstName%>

      Thank you for reaching out to us for a quote. We appreciate your interest in our services and would be delighted to assist you further.
      
      
      Our team is currently reviewing your request and preparing a detailed quote tailored to your specific needs. We understand the importance of timely responses, and we aim to get back to you as soon as possible with the information you require.
      
      
      Thank you for your patience. We will be in touch soon with your personalized quote.
      
      
      Best Regards,
      
      Le Four Studio
        `,
      html: requestToSender(params),
    };
    const emailTemplateToMaster = {
      subject:
        "Quote request from : <%= request.firstName %> <%= request.lastName %>",
      text: `
        New message via lefourstudio.com
        Full Name : <%= message.firstName %> <%= message.lastName %>
        Phone : <%= message.phone %> 
        Email : <%= message.email %> 

        -
        
        Message : <%= message.message %> 
        `,
      html: requestToMaster(params),
    };
    try {
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: "lefourmaster@gmail.com",
          // from: is not specified, the defaultFrom is used.
        },
        emailTemplateToMaster,
        {
          request: _.pick(request, [
            "phone",
            "email",
            "firstName",
            "lastName",
            "description",
            "createdAt"
          ]),
        }
      );
      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: request.email,
          from: "Le Four Studio",
        },
        emailTemplateToSender,
        {
          request: _.pick(request, [
            "phone",
            "email",
            "firstName",
            "lastName",
            "description",
            "createdAt"
          ]),
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
