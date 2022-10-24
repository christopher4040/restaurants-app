module.exports = ({env}) => ({
  settings: {
    cors: {
      credentials: true,
      enabled: true,
      origin: ['*', 'http://chma-restaurant-app.s3-website.us-east-2.amazonaws.com', 'https://restaurants-app-backend.herokuapp.com', 'https://restaurants-app-backend.herokuapp.com/graphql']
    }
  }
})