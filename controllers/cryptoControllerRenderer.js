const fetchData = require("../api");
const Crypto = require("../model/cryptoModel");

const getCryptoData = async (req, res) => {
  try {
    const crypto = await Crypto.find({}).limit(10);
    if (!crypto) return res.status(404).redirect("index");

    return res.status(200).render("index");
  } catch (error) {
    return res.status(500).redirect("index");
  }
};

const updateCryptoData = async (req, res) => {
  // this basically just reloads the data in the database

  try {
    if (await Crypto.deleteMany({})) {
      await fetchData();

      const crypto = await Crypto.find({}).limit(10);
      if (!crypto) return res.status(404).redirect("index");

      return res.status(200).render("index");
    } else {
      return res.status(500).redirect("index");
    }
  } catch (error) {
    return res.status(500).redirect("index");
  }
};

module.exports = {
  getCryptoData,
  updateCryptoData,
};
