module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", false) ? {
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", false),
      } : false,
    },
    debug: false,
  },
});

// CLOUDINARY_KEY : 316349395344759
// CLOUDINARY_NAME : dupmlkjqv
// CLOUDINARY_SECRET : Qj1Kc1VqU5yag_EQWeejhBDxqlM
// DATABASE_URL : postgres://deddfgbvdenvvk:8b82c9ade4e4f64cf8319e8a435589ec9fb4a7fa561af2b83f9298489cc7cce6@ec2-52-211-182-159.eu-west-1.compute.amazonaws.com:5432/d215rq17p93qnb
// MY_HEROKU_URL : https://microsillons-strapi.herokuapp.com/
// NODE_ENV : production
