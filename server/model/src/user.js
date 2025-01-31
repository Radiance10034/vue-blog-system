const {Users} = require('../model/index')
// const bcrypt = require('bcrypt')
let createUser = async(username,email,password,role,status,avatar)=>{
    // let salt = await bcrypt.genSalt(11)
    let pwres = password
    const user = await Users.create({
        username: username,
        email: email,
        password: pwres,
        role: role,
        status: status,
        avatar: avatar
    })
    return user
}
let Credentials = async(email,password)=>{
    const userExit = await Users.findOne({email: email})
    if (userExit) {
        return  (password === userExit.password) ? userExit : false
    } else {
        return false
    }
}
module.exports = {
    createUser,
    Credentials
}