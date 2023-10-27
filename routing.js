const auth = require('./auth');
const {register,login, home} = require('./controller')

const userRouter = require('express').Router();

userRouter.post("/register",register)
userRouter.post('/login',login)
userRouter.post('/',auth,home)



module.exports = {userRouter}