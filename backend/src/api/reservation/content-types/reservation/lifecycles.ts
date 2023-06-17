export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: result.email,
        from: 'Le Four Studio',
        subject: "Quote Request",
        text: "<h1>Quote request received successfully</h1>",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
