const express = require("express");
const cors = require("cors");
require("dotenv").config();

// middle wares

// error handlers
const globalErrorHandler = require("./utils/globalErrorHandler");

// routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const favoriteRoutes = require("./routes/favorite");
const brandRoutes = require("./routes/brand");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const paymentRoutes = require("./routes/payment");

// utils
const connectDB = require("./db/connectDB");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.LOCAL_CLIENT],
    credentials: true,
  })
);

app.use(userRoutes);
app.use(productRoutes);
app.use(favoriteRoutes);
app.use(brandRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use(paymentRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${res.originalUrl} on the server`);
  error.status = 404;

  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  // sendEMail();
  app.listen(port, () => {
    console.log("Server running...");
  });
};

main();

// module.exports = app;
