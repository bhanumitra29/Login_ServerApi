const array = []; 

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const secret_key = 'bhanu';


const register = (req, res) => {
    const data = req.body;
    const details = array.find((item) => {
        if (item.email === data.email) {
            return item;
        }
    });

    if (details) {
        return res.send({ msg: 'User already registered' });
    }

    const saltround = bcrypt.genSaltSync(10)

    const hashpassword = bcrypt.hashSync(data.password, saltround); 
   
    const tempobject = {
        email: data.email,
        password: hashpassword,
    };

    array.push(tempobject); 

    array.push(data)

    const token = jwt.sign({ useremail: data.email }, secret_key,{expiresIn:"7d"}); 
    console.log(token);

    res.send({ msg: 'user Registered sucessfully', token: token });
};


const login = (req, res) => {
    const logindata = req.body;

    const details = array.find((item) => {
        if (item.email === logindata.email) {
            return item;
        }
    });

    if (details) {
        const validate = bcrypt.compareSync(logindata.password, details.password); 
        if (validate) {
            const token = jwt.sign({ useremail: logindata.email }, secret_key, { expiresIn: "7d" });

            console.log(token);
            return res.send({ msg: 'user login successfully', token: token });
        } else {
            return res.send('user details are wrong');
        }
    } else {
        console.log('email or password is wrong');
        return res.send({ msg: 'email or password is wrong' });
    }
};

const home =(req,res) =>{
    return res.send("this is home");

}
module.exports = { register, login,home };

