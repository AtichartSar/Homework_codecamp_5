const db = require('../models/index')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (!targetUser) {
        res.status(400).send({ messagge: 'username or password is wrong1' })
    } else {
        //compare password(req) with password(database)
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password)
        console.log("isCorrectPassword",isCorrectPassword);

        if (isCorrectPassword) {
            const payload = {
                name: targetUser.username,
                id: targetUser.id
            }
            const key = process.env.SECRET_OR_KEY
            const token = jwt.sign(payload, key,{expiresIn:3600})
            res.status(200).send({
                token:token,
                message:"login successful"
            })

        } else {
            res.status(400).send({ messagge: 'username or password is wrong2' })
        }

    }
}


const register = async (req, res) => {
    const { username, password, name } = req.body
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (targetUser) {
        res.status(400).send({ message: 'username alerady taken' })
    } else {
        //get salt
        const salt = bcryptjs.genSaltSync(12)
        //บด string password + salt ให้เป็นตัวอักษรสุ่ม 15 หลัก+salt
        const hashedPassword = bcryptjs.hashSync(password, salt)

        await db.User.create({
            username: username,
            password: hashedPassword,
            name: name
        })
        res.status(201).send({ message: "user created" })

    }
    res.send("register user")
}

module.exports = {
    loginUser,
    register
}