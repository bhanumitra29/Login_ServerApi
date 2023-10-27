const jwt = require('jsonwebtoken')
const secret_key = "bhanu"
const auth =(req,res,next)=>{
    const BearerToken = req.headers["authorization"]
    if(BearerToken){
        const token = BearerToken.split(" ")


        const validate = jwt.verify(token,secret_key)
        if(validate){
            next()
        }

        return res.send({msg : "user not authorised"})


    }

    return res.send({msg: "user not allowed"})

}

module.exports = auth
