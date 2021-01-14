module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e44eaa28d1d30bcc1b6d3910954c8b88'),
    },
  },
});
