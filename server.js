const express = require('express');
const app = express();
const profiles = require('./routes/profiles')
const connectDB = require('./db/connect');
require('dotenv').config()
// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Food Donation App!');
})

app.use('/api/v1/profiles', profiles);

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server started at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();