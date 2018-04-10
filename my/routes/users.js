const express = require("express");
const router = express.Router();

/* GET users listing. */
// router.get("/", function(req, res, next) {
//   res.send("Hey ! It's a GET");
// });

/* GET user with ID. */
// router.get("/:id(\\d+)", function(req, res, next) {
//   res.send("Hey ! It's a GET with ID " + req.params.id);
// });

/* POST user creation. */
// router.post("/", function(req, res, next) {
//   res.send("Hey ! It's a POST");
// });

/* PUT user creation. */
// router.put("/:id(\\w+)", function(req, res, next) {
//   res.send("Hey ! My name is " + req.params.id);
// });

/* DELETE user creation. */
// router.delete("/:id(\\d+)", function(req, res, next) {
//   res.send("Hey ! My name it's a DELETE ID " + req.params.id);
// });


/* CAN I PUT SOME  DELETE */

/* Affiche le form */


router.get("/:name([a-zA-Z]+)", function(req, res, next) {
  res.render("update-user", {path: req.params.name});
})
router.get("/:name([a-zA-Z]+)", function(req, res, next) {
  res.render("update-user", {name: req.params.name});
})

router.put("/:name", function(req, res, next) {
  res.send(`The new name is ${req.body.name}`);
  console.log(req.body.name)
})

router.get("/:numero(\\d+)", function(req, res, next) {
  res.render("delete-user", {numb: req.params.numero})
})

router.delete("/:numero(\\d+)", function(req, res, next) {
  res.send("delete-user", {numb: `No more user with ID ` + req.body.numero})
})

module.exports = router;
