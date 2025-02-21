const express = require("express");
const router = express.Router();
const { processData } = require("../helpers/helper");

router.post("/", (req, res) => {
    console.log("🔹 Received Request Body:", req.body);

    const { data, user_id, email, roll_number } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    let response = processData(data);
    response.user_id = user_id;
    response.email = email;
    response.roll_number = roll_number;

    console.log("🔹 Sending Response:", response);
    res.json(response);
});

// ✅ NEW GET API that returns operation_code = 1
router.get("/", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
