module.exports = ({env}) => ({
  settings: {
    cors: {
      credentials: true,
      enabled: true,
      origin: ['*']
    }
  }
})