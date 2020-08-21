const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', userRoutes);
app.use('/api', adminRoutes);

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB'))
.catch(err => {
    console.log(err);
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
