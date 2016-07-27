export const serverConfig = {
  port: 8000,
}

export const sessionConfig = {
  secret: 'asdfasdfasdjfkdjkfqweioqwe',
  sessionMaxAge: 90 * 24 * 3600 * 1000,
}

export const dbConfig = {
  database: 'musliver',
  username: null,
  password: null,
  options: {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  },
}
