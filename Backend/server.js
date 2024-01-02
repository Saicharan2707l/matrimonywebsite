const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const UserModel = require ('./models/User');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/loginDetails');
app.post('/register', async (req, res) => {
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error: '+err));
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user=>{
       if(user){
              if(password===user.password){
                res.json("Success");
              }else{
                res.json("Wrong password");
              }
       }
         else{
              res.json("User does not exist");
            }
    })
}   
);


app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");
});