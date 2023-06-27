const express = require("express");
const router = express.Router();
const userSchema = require("../model/UserSchema")

router.post("/users", async (req, res) => {
    await userSchema.create(req.body)
    res.json({ massage: "Data created" })
})

module.exports = router;