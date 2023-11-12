const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Dulon:dulon123@cluster0.taxqwuy.mongodb.net/LoginRegister")
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