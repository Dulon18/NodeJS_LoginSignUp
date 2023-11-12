const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const templatePath = path.join(__dirname, '../tempelates')
const register = require("./mongoose")


app.use(express.json())
app.set('view engine', 'hbs')
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"));

app.get("/", (req, res) => {
     res.render("main")
})
app.post("/register", async (req, res) => {
     const data = {
          firstName:req.body.fname,
          lastName:req.body.lname,
          email:req.body.email,
          password:req.body.password
     }
     await register.insertMany([data])
     res.render("home")
})

app.post("/login", async (req, res) => {
try {
     const check = await register.findOne({ email:req.body.email })
     if (check.password === req.body.password)
     {
          res.render("home");
     }
     else {
          res.send("Credential Wrong")
     }
} catch{
 res.send("Credential Wrong")
}
})


app.listen(3000, () => {
     console.log('Server running successfully..')
})