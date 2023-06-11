const express = require("express")
const app = express()
const courseRouter = require("./routes/course")
const cors = require('cors')

app.use(cors({
    origin: "https://jacschedule.vercel.app",
    origin: "http://localhost:3000",
    origin: "https://jacschedule.com",
    origin: "https://cegep.app"
}))


//REST API!!!

app.use("/course", courseRouter)


app.listen(8080)

module.exports = app;