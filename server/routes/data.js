const express = require('express');
const router = express.Router();
const connection = require('../plugins/db.connection');
const sendError = require('../plugins/sendError');

let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/list', (req, res) => {
  connection((db) => {
    db.collection('recipes')
      .find()
      .toArray()
      .then((recipes) => {
        response.data = recipes;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

module.exports = router;