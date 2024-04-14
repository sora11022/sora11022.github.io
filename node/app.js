const express = require("express")
const app = express()

const router = require("./router")
router(app)

app.set("views", "./views")
app.set("view engine", "ejs")


app.use(express.static("./public"))
app.get("/home", (req,res)=>{
    return res.render("app.ejs")
})
app.listen(5000, ()=>{
    console.log("server run at port 5000");
})