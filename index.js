const express = require('express');
const app = express();
const port = 4003;

const bodyParser = require('body-parser');
const cors = require('cors');
const { userRouter } = require('./routing');


app.use(bodyParser.json());


app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to the default home page');
});

app.use('/api', userRouter);

app.listen(port, () => {
  try {
    console.log(`Server is running on port ${port}`);
}
catch (err) {
    console.log("error", err);
}
});
