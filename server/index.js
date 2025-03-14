const express = require("express");
const cors = require("cors");
const paymentRoutes = require("./router/payment.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
