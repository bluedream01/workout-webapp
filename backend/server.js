require('dotenv').config()
const express= require('express')
const mongoose=require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


const app=express();
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// app.get('/',(req,res)=>{
// res.json({mssg:"welcome"})
// })
app.use('/api/workouts',workoutRoutes);
app.use('/api/user',userRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
   app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000');
})
}).catch((error)=>{
    console.log(error)
})

