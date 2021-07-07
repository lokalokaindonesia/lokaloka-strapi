module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'lokaloka.qvvan.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'lokaloka'),
        username: env('DATABASE_USERNAME', 'amdinlokaloka'),
        password: env('DATABASE_PASSWORD', 'iChemistry01'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', ''),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
