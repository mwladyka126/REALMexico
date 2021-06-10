const express = require("express");
const router = express.Router();

const Booking = require("../models/booking.model");

router.get("/bookings", async (req, res) => {
  try {
    const result = await Booking.find().sort({ created: -1 });
    if (!result) res.status(404).json({ booking: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/bookings", async (req, res) => {
  try {
    const { trips, created, firstName, lastName, email, phone, bookingId } =
      req.body;
    const newBooking = new Booking({
      trips,
      created,
      firstName,
      lastName,
      email,
      phone,
      bookingId,
    });
    await newBooking.save();
    res.json({ newBooking });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/bookings/:id", async (req, res) => {
  try {
    const result = await Booking.findById(req.params.id);
    if (!result) res.status(404).json({ booking: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
