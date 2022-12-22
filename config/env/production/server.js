module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", ""),
        uri: env(
          "DATABASE_URI",
          `mongodb+srv://doadmin:aL943826E0v1lbXW@db-mongodb-sgp1-51567-2e31d856.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-sgp1-51567&tls=true`
        ),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "admin"),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
