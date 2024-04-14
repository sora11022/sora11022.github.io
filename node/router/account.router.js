const express = require("express")
const router = express.Router()

const {
    getAccounts
} = require("../controllers/account.controller")

router
    .route("/")
    .get(getAccounts)

module.exports = router