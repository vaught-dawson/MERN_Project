require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("[Event] Connected to database"))
  .catch((err) => console.log("[ERROR] Failed to connect to database", err));
