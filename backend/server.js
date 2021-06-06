const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const OffersRoutes = require("./routes/offers.routes");

const app = express();
require("dotenv").config();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use("/api", OffersRoutes);

/* API ERROR PAGES */
app.use("/api", (req, res) => {
  res.status(404).send({ Offer: "Not found..." });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, "../build")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

/* MONGOOSE */
mongoose.connect(
  `mongodb+srv://${process.env.mongoApp}:${process.env.mongoPass}@cluster0.w1mbx.mongodb.net/REALMexico?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to the database");
});
db.on("error", (err) => console.log("Error: " + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
