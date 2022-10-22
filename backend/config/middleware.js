module.exports = ({env}) => ({
  settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'http://chma-restaurant-app.s3-website.us-east-2.amazonaws.com')
    }
  }
})