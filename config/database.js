module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-129.railway.app"),
      port: env.int("DATABASE_PORT", 6616),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "VgmyOvM8hCHbgPxZpIfS"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
