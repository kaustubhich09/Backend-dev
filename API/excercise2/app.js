const express = require("express");
const app = express();


app.use(express.json());


function validateYear(req, res, next) {
    const year = req.body.year;

    
    if (!year || isNaN(year)) {
        return res.status(400).json({
            error: "Year must be a valid number"
        });
    }

    const currentYear = new Date().getFullYear();

   
    if (year < 1900 || year > currentYear) {
        return res.status(400).json({
            error: `Year must be between 1900 and ${currentYear}`
        });
    }

    
    next();
}


app.post("/check-year", validateYear, (req, res) => {
    res.json({
        message: "Valid year received!",
        year: req.body.year
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});