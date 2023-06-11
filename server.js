const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongooes = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
app.use(cors());
app.use(express.json());

// database connection with mongodb
mongooes.set('strictQuery', true);
const uri  =  process.env.ATLUS_URI;
mongooes.connect(
    uri, { useNewUrlParser: true, useUnifiedTopology: true,} 
    );
const connection = mongooes.connection;
connection.once('open',()=>
{
   console.log("MongoDB has been connected");
})

// path routes 
const products = require('./Backend/Routes/products');
const CostumerOrder = require('./Backend/Routes/CostumerOrder')
const MainUser = require('./Backend/Routes/MainUser')
const iconsAndImages = require('./Backend/Routes/images')

// using routes
app.use('/products', products);
app.use('/invoiceMaker', CostumerOrder);
app.use('/mainuser', MainUser);
app.use('/mainpageimages',iconsAndImages)

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
}); 
