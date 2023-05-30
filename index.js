const express = require("express")
const app = express()
const courseRouter = require("./routes/course")


//REST API!!!

app.use("/course", courseRouter)


app.listen(8080)

