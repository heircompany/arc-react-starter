// cookie key
// passport auth keys
// mongodb keys

module.exports = {
  cookieKey: process.env.COOKIE_KEY,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  sendgridKey: process.env.SENDGRID_API_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};

/* Will be Configured on Heroku As:
* module.exports = {
*   cookieKey: '19puddlesthekittyjglol12nlviovuyoiya7yto8ca11',
*   googleClientID:
*     '459153693051-8906383g82a8846msfmmbef8e9hiiu3l.apps.googleusercontent.com',
*   googleClientSecret: 'ZzwXRUZa79X2vP6iiEf9i1ie',
*   mongoURI:
*     'mongodb://joegrotto:buiLDa#Tr1b3!1@ds017231.mlab.com:17231/emaily-prod'
* };
*/
