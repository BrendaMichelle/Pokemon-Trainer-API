var Trainer = require("../models").trainer;

exports.getAll = function (req, res) {
  Trainer.findAll().then(trainer => {
    res.json(trainer);
  });
};

exports.createTrainer = function (req, res) {
  Trainer.create({
    name: req.body.name,
    age: req.body.age,
    pokemon: req.body.pokemon
  }).then(trainer => {
    res.json(trainer);
  });
};

exports.getOne = function (req, res) {
  Trainer.findOne({
    where: {
      id: req.params.id
    }
  }).then(trainer => {
    res.json(trainer);
  });
};

exports.updateTrainer = function (req, res) {
  Trainer.update(
    {
      age: req.body.age,
      pokemon: req.body.pokemon
    },
    {
      returning: true,
      where: {
        id: req.params.id
      }
    }
  ).then(updatedTrainer => {
    res.json(updatedTrainer);
  });
};

exports.deleteTrainer = function (req, res) {
  Trainer.destroy({
    where: {
      id: req.params.id
    }
  }).then(numOfDeletions => {
    res.json(numOfDeletions);
  });
};
