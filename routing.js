const auth = require('./auth');
const {register,login} = require('./controller')

const userRouter = require('express').Router();

userRouter.post("/register",register)
userRouter.post('/login',login)

userRouter.get("/", auth, (req, res) => {
    console.log("Homepage")
    res.send("Homepage");
})


module.exports = {userRouter}