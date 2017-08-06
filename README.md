#Create React App -> Progressive Web Application
`npm i --save react@16.0.0-alpha.13 react-dom@16.0.0-alpha.13` for newest version

Run from Project's root directory
`create-react-app client`
Starter PWA includes scripts, babel, webpack, jest, server with hot reloading, and service worker

Environment Variables && Automatic NODE_ENV configuration for 'development' and 'production'
https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md

#JavaScript Tricks
'' is a falsey value -> we use `'' || false` to trick JavaScript with our API

#Prettier Linting
using prettier https://github.com/prettier/prettier

Atom users can simply install the prettier-atom package and use Ctrl+Alt+F to format a file (or format on save if enabled).

#Heroku Apps
`heroku logs` for deployment logs
Heroku Proxy routes traffic to our web server
--> Passport Google Strategy removes https from proxy requests
--> SOLUTIONS: change callbackURL for dev/prod to absolute paths, OR add proxy configuration option

`heroku-postbuild` script from Heroku docs -> install client dependencies and build after deployment
https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process

#Passport OAuth
Google OAuth --> emaily projects for examples
Facebook OAuth --> Amazon Clone project
Local --> username/password
JWT --> Advanced React/Redux (Stephen Grider), NodeJS Developer (Andrew Mead)

#Session Tracking
cookie-session - middleware stores actual user data in cookie. Can only store 4KB
express-session - middleware stores a reference to session remotely. Store whatever we want

#NPM Package.json & Scripts
concurrently package --> chain multiple scripts
`--prefix client` --> run command from within a subdirectory
`proxy` --> auto-resolve URI changes between dev and prod root domains
        --> create-react-app server is not in production - resolved at build time

#Materialize CSS
REMOVED `container` className in App.js to remove padding

#CSS & SASS/LESS
https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc

#React Router
`exact` must be used whenever we want React Router to match route case EXACTLY
`/` is contained by `/surveys` is contained by `/surveys/new`
Router is made up of standard React components -> place always visible components above Routes

#Stripe
https://stripe.com/docs/api/node
React frontend client code is accessible to the world! Config on server is different and separate
CheckoutJS -> Stripe JS library for credit card processing
`react-stripe-checkout` -> npm module that uses CheckoutJS in a React Component
    --> amount is in usd, cents ($5.00 is amount={500})
Monthly recurring payments are hard and buggy --> Try Recurly?
All card information is returned from backend API request
DYNAMIC CHARGE --> billingRoutes.js --> is it on req.body.amount?

#MongoDB
Document Size Limit = 4MB -> use Subdocuments
Email characters to bytes = 1:1 ratio
  --> 25 characters === 25 bytes
  --> ~200,000 recipients per survey
  --> if User model was a parent of surveys, they would have a total account limit of 200,000!
`_user` associates Users to Surveys
  --> `_` is used by convention to indicate reference
