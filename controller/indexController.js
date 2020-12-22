const express = require('express');
const router = express.Router();
const exerciseModel = require('../model/exerciseModel');
const cardioModel = require('../model/cardioModel');

router.get('/', (req, res) => {
    res.render('index', { title: "home page" })
})

router.get('/stats', (req, res) => {
    exerciseModel.find((err, docs) => {
        if (!err) {
            res.status(201).render('stats', { list: docs })
        } else {
            res.status(500).json(err);
        }
    }).lean()

    cardioModel.find((err, docs) => {
        if (!err) {
            res.status(201).render('stats', { cardios: docs })
        } else {
            res.status(500).json(err);
        }
    }).lean()

})


router.get('/exercise', (req, res) => {
    res.render('exercise', { title: "exercise" })
})

router.post('/exercise', (req, res) => {

    if (!req.body) {
        res.status(400).send("Request body not found")
    }


    let workout = {};

    if (req.body.type === "cardio") {

        workout.cardio_name == req.body.cardio_name
        workout.distance == Number(req.body.distance)
        workout.duration == Number(req.body.duration)

        var model = new cardioModel(req.body);

    } else if (req.body.type === "resistance") {
        workout.name = req.body.name;
        workout.weight = req.body.weight;
        workout.sets = req.body.sets;
        workout.reps = req.body.reps;
        workout.resistance_duration = req.body.resistance_duration;

        var model = new exerciseModel(req.body);
    }

    console.log(workout)


    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            } else {
                return res.redirect('/stats');
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })




})


module.exports = router