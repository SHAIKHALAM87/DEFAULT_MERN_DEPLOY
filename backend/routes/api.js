const express = require('express');
const router = express.Router();

router.get('/todos', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  console.log("This is todos api calling!");
  res.send("This is todos api GET calling!");
});

router.post('/todos', (req, res, next) => {
  console.log("This is todos api POST calling!");
    req.body.message = "This is todos api POST calling!";
    res.json(req.body);
});


module.exports = router;