const express = require("express")
const app = express()
const courseRouter = require("./routes/course")
const cors = require('cors')




//REST API!!!

app.use("/course", courseRouter)


app.listen(8080)

module.exports = app;