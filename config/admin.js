module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19daa29da09eda63fd96e8f31b75eb1b'),
  },
});
