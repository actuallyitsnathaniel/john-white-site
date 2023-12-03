module.exports = ({ env }) => ({
  auth: {
    secret: env("STRAPI_ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("STRAPI_API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("STRAPI_TRANSFER_TOKEN_SALT"),
    },
  },
});
