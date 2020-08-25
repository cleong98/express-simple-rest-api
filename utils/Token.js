const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret ='AC514182DC5C19FEB45F666E8FEE8F51';

const createToken = (hash,pass,id,jwtOption={})=> {
    let token = "";
    const isValid = bcrypt.compareSync(pass,hash);
    if(isValid) {
         token = jwt.sign({
            id
        },secret,jwtOption);

    }
    return {
        token,
        verify:isValid
    }

}

const hashPass = (pass)=> {
    return bcrypt.hashSync(pass,saltRounds);

}

const verifyToken = (token) => {
    try {
        const verify =  jwt.verify(token,secret);
        return {
            msg:"not Expired",
            status:1,
            verify,
            id:verify.id
        }
    } catch (error) {
        return {msg:error.message,status:0};
    }
}

module.exports = {
    createToken,
    hashPass,
    verifyToken
}

