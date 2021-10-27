const express = require("express");
const translate = require("translate");
const { ObjectID } = require("bson");
const router = express.Router();
router.use(express.static(`main`));

// get all farmers
//localhost:4000/farmers

// router.post("/", (req, res) => {
//   req.db
//     .collection("words")
//     .insertOne({word:req.body.word})
//     .then((doc) => res.json({ status: "success" }))
//     .catch((err) => res.json({ status: "fail" }));
// });

// router.get("/", (req, res) => {
//   req.db
//     .collection("words")
//     .find()
//     .toArray()
//     .then((doc) => res.json(doc));
// });

router.get("/:word", (req, res) => {
  async function translateString(str, translateTo) {
    translate.engine = "google"; // Or "yandex", "libre", "deepl"
    translate.key = process.env.GOOGLE_KEY;
    const translateString = await translate(str, translateTo);
    return translateString;
  }

  translateString(req.params.word, "Amh").then((doc) => res.json(doc));
});

// router.delete("/", (req, res) => {
//   req.db
//     .collection("words")
//     .deleteMany({})
//     .then((doc) => res.json({ status: "success" }))
//     .catch((err) => res.json({ status: "fail" }));
// });

module.exports = router;
//
