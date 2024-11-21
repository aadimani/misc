const express = require('express'); //we exported package for creating server
const app = express(); // stored express in variable to use in request like for post, get
const port = 3000; // to run backened code on particular port.
const sequelize = require('./db'); // Import the sequelize instance
const User = require('./models/User')
app.use(express.json());//middleare to get req data in json

app.get('/hello-world', (req, res) => { //api ready here in routes model and controller
  res.send('Hello World! yuppy yuppy yuppy');
});


app.post('/user', (req, res) => { //api ready here in routes model and controller
    const {name} = req.body; 
    res.send(`Hello World from POST! Received: ${JSON.stringify(name)}`);
  });

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});

app.post('/login', (req, res) => { //api ready here in routes model and controller
  const {email} = req.body; 
  const {password} = req.body; 

  res.send(`Hello World from POST! Received: ${JSON.stringify(email)},${JSON.stringify(password)}`);
});

(async()=>{
  try{

    const data= await User.create({
      email:"adarsh@gmail.com",
      password:"12345"
    })
console.log("successfull",data)

  }catch(error){
    console.error("errr msg",error)
    console.log("error msg")

  }finally {
    await sequelize.close();
  }
})
