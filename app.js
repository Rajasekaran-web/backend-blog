const express = require('express');
const connectDB = require('./src/config/db');
const adminRouters = require('./src/routers/admin');
const cors = require('cors');
const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.use('/hrms',adminRouters);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
