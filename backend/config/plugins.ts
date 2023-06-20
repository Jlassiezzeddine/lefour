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
      defaultFrom: env("DEFAULT_FROM"),
      defaultReplyTo: env("DEFAULT_REPLY_TO"),
      testAddress: env("DEFAULT_TEST_EMAIL"),
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
