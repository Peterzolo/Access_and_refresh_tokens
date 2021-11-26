const express = require('express');

const app = express();


require('dotenv').config();

app.use(express.json());

const userRouter = require('./userRoute');
const postRouter = require('./postRoute');

const port = 5000;

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.listen(port, () => console.log(`Server started on port:${port}`));
