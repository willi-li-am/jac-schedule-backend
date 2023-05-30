const express = require("express")
const app = express()
const courseRouter = require("./routes/course")
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
}))


//REST API!!!

app.use("/course", courseRouter)


app.listen(8080)

