const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");
const authRoutes = require("./routes/authRoutes");
const landRoutes = require("./routes/landRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();   // ✅ Initialize app first

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/lands", landRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Prime Estates API Running");
});



// Error handling middleware should come AFTER routes
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
