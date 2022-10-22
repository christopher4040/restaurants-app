module.exports = ({env}) => ({
  settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'http://localhost:3000,http://chma-restaurant-app.s3-website.us-east-2.amazonaws.com,http://chma-restaurant-app.s3-website.us-east-2.amazonaws.com/').split(",")
    }
  }
})