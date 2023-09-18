const fetchData = require("../api");
const Crypto = require("../model/cryptoModel");

const getCryptoData = async (req, res) => {
  try {
    const crypto = await Crypto.find({}).limit(10);
    if (!crypto)
      return res
        .status(404)
        .send({ message: "no crypto found", data: crypto, status: "success" });

    return res.status(200).send({
      message: "cryptos fetched successfully",
      data: crypto,
      status: "success",
    });
  } catch (error) {
    return res.status(500).send({
      message: "something went wrong ",
      error_message: error.message,
      status: "fail",
    });
  }
};

const updateCryptoData = async (req, res) => {
  // this basically just reloads the data in the database

  try {
    if (await Crypto.deleteMany({})) {
      await fetchData();

      const crypto = await Crypto.find({}).limit(10);
      if (!crypto)
        return res.status(404).send({
          message: "no crypto found",
          data: crypto,
          status: "success",
        });

      return res.status(200).send({
        message: "database updation successful",
        data: crypto,
        status: "success",
      });
    } else {
      return res.status(500).send({
        message: "unable to update database",
        error_message: "failed to update database",
        status: "fail",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "something went wrong ",
      error_message: error.message,
      status: "fail",
    });
  }
};

module.exports = {
  getCryptoData,
  updateCryptoData,
};
