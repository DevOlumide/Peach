const express = require("express");
const router = express.Router();
const usermodelSchemaCopy = require("../models/usermodels");
const bcrypt = require("bcryptjs");


router.post("/register", (request, response) => {
  var salt = bcrypt.genSaltSync(8);
  
  const registered = new usermodelSchemaCopy({
    companyName: request.body.companyName,
    companyEmail: request.body.companyEmail,
    password: bcrypt.hashSync(request.body.password,salt),
    phone_no: request.body.phone_no,
    country: request.body.country,
    province: request.body.province,
    postal: request.body.postal
  });
  registered.save().then((data) => response.json(data)).catch(err => console.log(err));
  console.log(registered);
});

/*router.get("/login", async(request,response) => {
  usermodelSchemaCopy.find(function (err,result){
    if(err){
      response.send(err);
    }
    response.send(result);
    console.log(result);
  })
});*/

module.exports = router;