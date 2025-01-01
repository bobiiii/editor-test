const mongoose = require('mongoose');

if (!process.env.MONGODB_URI_Production) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI_Production;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false, // Uncomment if you're using MongoDB 4.0+
  // useCreateIndex: true,    // Uncomment if you're using MongoDB 4.0+
};

let isConnected = false;

const startDB = async (req, res, next) => {
  if (isConnected) {
    // next();
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global.mongoose) {
      global.mongoose = { conn: null, promise: null };
    }

    if (!global.mongoose.conn) {
      global.mongoose.promise = mongoose.connect(uri).then((mongoose) => {
        console.log('connected to Mongodb dev ');
        return mongoose;
      });
    }
    global.mongoose.conn = await global.mongoose.promise;
    isConnected = !!global.mongoose.conn;
    // next();
  } else {
    // In production mode, create a new connection
    const connection = await mongoose.connect(uri);
    isConnected = !!connection.connections[0].readyState;
    console.log('connected to Mongodb ');
    // next();
  }
};

module.exports = { startDB };