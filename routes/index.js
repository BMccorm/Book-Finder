const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const booksController = require("../controllers/booksController");


// router.route("/api/books")
//     .get(booksController.findAll)
//     .post(booksController.create);
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    console.log("------------------------:", req.url)
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;