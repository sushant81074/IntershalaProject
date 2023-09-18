const axios = require("axios");
const Crypto = require("../model/cryptoModel");

const fetchData = async (req, res) => {
  try {
    const fetchedData = await axios.get(
      "https://api.wazirx.com/api/v2/tickers"
    );
    if (fetchedData.status === 200) {
      const tickerData = fetchedData.data;

      for (const symbol in tickerData) {
        const ticker = tickerData[symbol];

        const newTicker = new Crypto({
          symbol: symbol,
          crypto_last: ticker["last"],
          crypto_buy: ticker["buy"],
          crypto_sell: ticker["sell"],
          crypto_name: ticker["name"],
          crypto_volume: ticker["volume"],
          crypto_baseunit: ticker["base_unit"],
          crypto_id: ticker["name"] + ticker["at"],
        });

        await newTicker.save();
      }

      console.log("Data fetched and stored successfully");
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.log("something went wrong , cannot fetch data", error);
  }
};

module.exports = fetchData;
