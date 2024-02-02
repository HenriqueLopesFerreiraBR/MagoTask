const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const database = require('./src/database/connect')


const UserRouter = require('./src/router/UserRouter')
const TaskRouter = require('./src/router/TaskRouter')
const CategoryRouter = require('./src/router/CategoryRouter')


app.use(bodyParser.urlencoded({ extended: true }));

database.connectDB()

app.use('/api/user', UserRouter)
app.use('/api/task', TaskRouter)
app.use('/api/category', CategoryRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});