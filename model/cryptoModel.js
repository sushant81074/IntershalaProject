const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  crypto_id: {
    type: String,
    required: true,
  },
  crypto_name: {
    type: String,
    required: true,
  },
  crypto_last: {
    type: Number,
    required: true,
  },
  crypto_buy: {
    type: Number,
    required: true,
  },
  crypto_sell: {
    type: Number,
    required: true,
  },
  crypto_volume: {
    type: Number,
    required: true,
  },
  crypto_baseunit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Crypto", cryptoSchema);

// crypto_id SERIAL PRIMARY KEY,
//     crypto_name VARCHAR(50) NOT NULL,
//     crypto_last numeric NOT NULL,
//     crypto_buy  numeric NOT NULL,
//     crypto_sell numeric NOT NULL,
//     crypto_volume numeric NOT NULL,
//     crypto_baseunit VARCHAR(50) NOT NULL
