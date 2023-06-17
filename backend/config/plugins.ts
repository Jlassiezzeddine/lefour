export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",
        secure: false,
        debug: true,
        logger: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
    },
    settings: {
      defaultFrom: "Le Four Studio <lefourmaster@gmail.com>",
      defaultReplyTo: "Le Four Studio <lefourmaster@gmail.com>",
      testAddress: "Le Four Studio <lefourmaster@gmail.com>",
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
