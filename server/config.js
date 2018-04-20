// server/config.js
module.exports = {
   AUTH0_DOMAIN: 'alabaojo.eu.auth0.com', // e.g., kmaida.auth0.com
     AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
       MONGO_URI: process.env.MONGO_URI || 'mongodb://alaba:wilson981@ds247759.mlab.com:47759/mongo1'
};
// MONGO_URI: process.env.MONGO_URI || 'mongodb://demost:S*20#testkey@ds247759.mlab.com:47759/mongo1'
