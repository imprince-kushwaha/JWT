// const express = require("express");
// var cors = require('cors');
// const app = express();

// app.use(cors());
// const PORT = 3000;
// const connectDB = require("./src/db/database.js");

// app.use(express.json());

// app.use("/test", (req, res) => {
//   res.send("Hello test server");
// });

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Example app listening on PORT ${PORT}`)
//     })
// })
// .catch((err) => {
//     console.log("MONGO DB connection failedd!!!!",err);
// });




const express = require('express');
var cors = require('cors');
const jwt = require('jsonwebtoken');
// const { verifyToken } = require('./src/middlewares/auth.middleware');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const hardcodedUser = {
    email: 'user@example.com',
    password: 'password123',
};
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token required' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Invalid token' });
      req.user = decoded;
      next();
    });
  };


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
