import mongoose from 'mongoose'
import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import models from './db.js'
import dotenv from 'dotenv'
const app = new express();
dotenv.config()
const payload = { id: "id", email: "email" }

const a=jsonwebtoken.sign(payload, process.env.SECRET) 
jsonwebtoken.verify(a, process.env.SECRET, (err, decoded) => {
    if (err) {
        console.error(err.message);
        return res.send("Invalid token"); // send response indicating invalid token
    } else {
        console.log(decoded);
    }
});