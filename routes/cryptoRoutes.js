const router = require("express").Router();
const {
  getCryptoData,
  updateCryptoData,
} = require("../controllers/cryptoController");

router.get("/", getCryptoData);
router.get("/updateCrypto", updateCryptoData);

module.exports = router;
