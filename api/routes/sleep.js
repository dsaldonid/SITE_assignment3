const express = require("express")
const Sleep = require("../models/sleep")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const sleeps = await Sleep.listSleepForUser(user)
    return res.status(200).json({ sleeps })
  } catch (err) {
    next(err)
  }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const sleep = await Sleep.createSleep({ sleep: req.body, user })
    return res.status(201).json({ sleep })
  } catch (err) {
    next(err)
  }
})

module.exports = router