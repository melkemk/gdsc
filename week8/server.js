import mongoose from 'mongoose'
import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import models from './db.js'
import dotenv from 'dotenv'
const app = new express();
app.use(express.json());
dotenv.config()
mongoose.connect('mongodb://localhost:27017/gdsc', { useNewUrlParser: true }).then(()=>console.log('connected to databasae')).catch(err=>console.log(err.message))

function authorization(req,next){
const token = req.headers.authorization.split('  ')[1];
jsonwebtoken.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
        console.error(err.message);
        return res.send("Invalid token"); // send response indicating invalid token
    } else {
        console.log(decoded);
        next();
    }
});}

        app.use('/login', (req, res, next) => {
            if (req.headers.authorization) {
                if (req.headers.authorization.length!=7) {
                    authorization(req,next)
            }
            } else {
                const { userEmail, userPassword } = req.body;
                if (userEmail) {
        
                    models.findOne({ email: userEmail })
                        .then(user => {
                            if ((user)) {
                                bcrypt.compare(userPassword, user.password)
                                    .then(areEqual => {
                                        if (areEqual) {
                                            const payload = { id: user.id, email: user.email }
                                            const aut=jsonwebtoken.sign(payload, process.env.SECRET) ;
                                            res.json({ "jwtToken":aut })
                                        } else {
                                            res.send("false credentials");
                                        }
                                    })
                                    .catch(err => { console.log(err.message) });
                            } else {
                                res.send("false credentials");
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            return;
                        });
                } else {
                    res.send("false credentials");
                }
            }
        });
        


app.post('/login', (req, res) => {
    console.log('logged')
})




async function generate(password) {
    console.log(password)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    return new Promise((resolve, reject) => {
        try {
            resolve(hashedPassword)
        } catch (e) { reject({ "message": e.message }) }
    })
}





//register 
app.post('/register', (req, res) => {

    const { email, password } = req.body;

    generate(password).then((hashedPassword) => {
        var user = new models({
            email: email,
            password: hashedPassword
        })
        user.save()
        .then((saved) =>res.json({ "saved": "true" }))
        .catch((e) => {
            res.json({"error":e.message})})
    }).catch((e) => {
        console.log(e.message)
        res.status(404)
    })

})


app.listen(5000, (err) => console.log('listening on port 5000 ...'))
