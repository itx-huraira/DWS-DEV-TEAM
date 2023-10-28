const express = require('express');
const app = express();
const path = require('path');
const port  = 3000;
const db = require('./db/conn');
const clientModel = require('./models/client');
app.use(express.urlencoded({extended:true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/', (req, res) =>{
   res.render('clientForm');
});

app.post('/submit', async (req, res) => {
  const { name, cellNo, address, comapnyName, comapnyEmail, companyCellno, marketplace, investment } = req.body;
  const marketingPlace = marketplace.join(', ');
  const investmentPlan = investment.join(', '); 
  const newClient = new clientModel({
      name,
      cellNo,
      address,
      comapnyName,
      comapnyEmail,
      companyCellno,
      nextKin: [
          {
              relationship: req.body.nextKin,
              kinName: req.body.kinName,
              kinCellNo: req.body.kinCellNo,
              kinAddress: req.body.kinAddress
          }
      ],
      accountType: [
          {
              role: req.body.AccountRole
          }
      ],
      contractPeriod: [
          {
              contractPeriod: req.body.contract
          }
      ], 
      marketplace:marketingPlace,
      investment: investmentPlan,
  });

  try {
      await newClient.save();
      res.send('Data saved successfully');
  } catch (err) {
      console.error('Error saving data: ' + err);
      res.send('Error in sending data');
  }
});



app.listen(port, (req, res) =>{
  console.log(`app is listening or port ${port}`)
})