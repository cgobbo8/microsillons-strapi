const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "containers-us-west-129.railway.app"),
        port: env.int("DATABASE_PORT", 6616),
        database: env("DATABASE_NAME", "railway"),
        user: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "VgmyOvM8hCHbgPxZpIfS"),
        ssl: {
          rejectUnauthorized: false,
        },
      },
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
