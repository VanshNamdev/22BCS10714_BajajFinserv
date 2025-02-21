const { processData } = require("../helpers/helper");

exports.handlePost = (req, res) => {
    try {
        const { data } = req.body;
        const result = processData(data);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
};

exports.handleGet = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};
