const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const user = req.body.username;
    const pass = req.body.password;
    if (user === "admin" && pass === "Admin@123") {
      const token = jwt.sign({ userId: user._id, user }, "your-secret-key", {
        expiresIn: "1h",
      });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed" + error });
  }
});

module.exports = router;
