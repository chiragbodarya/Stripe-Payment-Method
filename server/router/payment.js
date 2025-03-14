const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment", async (req, res) => {
    try {
        const { amount } = req.body;
        console.log("amount", amount);
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: amount * 100, // Convert amount to cents
        //     currency: "usd",
        //     payment_method_types: ["card"],
        // });

        // res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        // res.status(500).json({ error: error.message });
    }
});

module.exports = router;
