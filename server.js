const express = require("express");
const cors = require("cors");
const app = express();
const PORT = require("./config/config").PORT;
const bfhlRoutes = require("./routes/bfhlRoutes");

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use("/bfhl", bfhlRoutes); // Use route handler

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
