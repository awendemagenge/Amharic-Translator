const express = require("express");
const translate = require("translate");
const router = express.Router();
router.use(express.static(`main`));

// get all farmers
//localhost:4000/farmers

router.get("/:word", (req, res, next) => {
  async function translateString(str, translateTo) {
    translate.engine = "google"; // Or "yandex", "libre", "deepl"
    translate.key = process.env.GOOGLE_KEY;
    const translateString = await translate(str, translateTo);
    // console.log(translateString);
    return translateString
  }

  translateString(req.params.word, "Amh").then((doc)=>res.json(doc))
  // next()
});

module.exports = router;
//
