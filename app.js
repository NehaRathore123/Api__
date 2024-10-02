import express from 'express';

const app = express();

import userRouter from './route/user.router.js'

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3001;

app.use("/user",userRouter)

app.listen(PORT,()=>{
  console.log(`server invoked at ${PORT}`)
})