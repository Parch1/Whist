const express = require('express');
const Router = express.Router();

Router.get('/', async function(req, res) {
  try {
    let bodyParts;
    if (req.query.filter) {
      bodyParts = await DB.query(`SELECT * FROM workouts WHERE WorkoutCode='${req.query.filter}'`);
      if (bodyParts.length === 0) {
        res.json({
          error: 'workNotFound'
        });
      } else {
        res.json(bodyParts[0]);
      }
    } else if (req.query.item) {
      res.redirect('/workout/search?item=' + req.query.item);
    } else {
      res.json({
        error: 'noFilter'
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      error: 'sql'
    });
  }
});

Router.get('/search', async function(req, res) {
  try {
    let Results;
    if (req.query.item && req.query.item.length > 2) {
      Results = await DB.query(
        `SELECT * FROM workouts WHERE WorkoutName REGEXP '.*${req.query.item}.*'`
      );
      if (Results.length == 0) {
        res.json({
          results: false
        });
      } else {
        res.json({
          results: true,
          content: Results
        });
      }
    } else {
      res.json({
        error: 'noItem'
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      error: 'sql'
    });
  }
});

Router.get('/:partsbody', async function(req, res) {
  try {
    req.params.partsbody = req.params.partsbody.replace('_', ' ');
    let bodyParts;
    if (req.query.filter) {
      bodyParts = await DB.query(
        `SELECT * FROM workouts WHERE WorkoutBodyParts REGEXP '.*${
          req.params.partsbody
        }.*' AND WorkoutCode='${req.query.filter}'`
      );
    } else {
      bodyParts = await DB.query(
        `SELECT * FROM workouts WHERE WorkoutBodyParts REGEXP '.*${req.params.partsbody}.*'`
      );
    }
    res.json(
      bodyParts.map(_ => {
        _.WorkoutBodyParts = _.WorkoutBodyParts.split(',');
        return _;
      })
    );
  } catch (e) {
    console.log(e);
    res.json({
      error: 'sql'
    });
  }
});

module.exports = Router;
