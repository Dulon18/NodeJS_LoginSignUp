const mongoose = require('mongoose')

mongoose.connect("mongodbconnection/LoginRegister") //connect your own connection of mongoDb & Database name
     .then(() => {
     console.log('mongoose connected')
     }).catch(() => {
     console.log("Not Connected");
     })

const LogInSchema = new mongoose.Schema({
     firstName: {
          type: String,
          require: true
     },
     lastName: {
          type: String,
          require:true
     },
     email: {
          type: String,
          require:true
     },
     password: {
          type: String,
          require:true
     }
})

const register = new mongoose.model("register", LogInSchema)

module.exports=register
