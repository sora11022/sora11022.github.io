const express = require('express');
const app = express();

const connectDB = require('./configs/database');
const router = require('./routers');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads/'));


connectDB();
router(app);

app.listen(5001, () => {
  console.log('server is run at port 5001');
});
