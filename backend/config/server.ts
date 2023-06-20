export default ({ env }) => ({
  host: env('STRAPI_HOST', '0.0.0.0'),
  port: env.int('STRAPI_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('ENVIRONMENT') === 'production' ? `${env('PUBLIC_URL', 'https://lefourstudio.com')}/strapi/`: `${env('PUBLIC_URL', 'http://localhost')}/strapi/`,
});
