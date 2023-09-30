const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require("./database/db");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 8000

app.use(express.json());
app.use(cors());



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server started on ${port}`)
            console.log(`Mongo Connected!!!`)
        });
    } catch (err) {
        console.log(err);
    }
}
app.use('/api/v1/users', userRoutes);

app.use(errorHandler);

start();