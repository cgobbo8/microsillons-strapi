module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL") ? {
        rejectUnauthorized: false,
      } : false,
    },
  },
});

// postgresql://microsillons:microsillons@91.99.147.50:5434/microsillons
