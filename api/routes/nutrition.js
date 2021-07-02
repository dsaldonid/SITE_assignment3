const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const nutritions = await Nutrition.listNutritionForUser(user)
    return res.status(200).json({ nutritions })
  } catch (err) {
    next(err)
  }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const user = res.locals.user
    const nutrition = await Nutrition.createNutrition({ nutrition: req.body, user })
    return res.status(201).json({ nutrition })
  } catch (err) {
    next(err)
  }
})

module.exports = router