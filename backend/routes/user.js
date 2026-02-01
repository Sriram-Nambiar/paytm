const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const { User, user } = require('../db.js');

const signupSchema = zod.object({
    username: zod.string().min(3),
    firstname: zod.string().min(1),
    lastname: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(6),
});

userRouter.post('/signup', async(req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if (!success) {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    const user = user.findOne({
        username: body.username,
    })

    if(user_id){
        return res.status(400).json({ message: 'User already exists' });
    }

    const dbuser =await user.create(body);

    const token = jwt.sign({
        id: dbuser._id,
        username: dbuser.username,
    }, process.env.JWT_SECRET);
      res.status(201).json({ message: 'User created successfully', token: token });


})

module.exports = userRouter;