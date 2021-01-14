module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '192.168.64.2'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'cesi'),
        username: env('DATABASE_USERNAME', 'simon2'),
        password: env('DATABASE_PASSWORD', 'yamaha'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
