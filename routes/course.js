const express = require("express")
const router = express.Router()
const classData = require("../modules/classData") //class data will come from database next

router.get("/search/:school", (req, res) => {
    let school = req.params.school
    let data = classData(school)
    if (data !== "DNE") {
        let keys = Object.keys(data)
        res.send(keys)
    }
    res.status(400).send("school does not exist")
})

router.get("/:school/:code", (req, res) => {
    let courseCode = req.params.code
    let school = req.params.school
    if (!(courseCode in classData(school))){
        res.status(400).send("course does not exist")
    }
    else {
        let data = classData(school)
        if (data != "DNE") {
            res.json(data[courseCode])
        }
        res.status(400).send("school does not exist")
    }
})

module.exports = router