const express = require('express')
const router = express.Router()
const fs = require('fs');

router.get('/', (req, res) => {
    let prehistoricCreatures = fs.readFileSync('./prehistoric-creatures.json');
    let creatureData = JSON.parse(prehistoricCreatures)
    res.render('prehistoric-creatures/index.ejs', {
        myCreatures: creatureData
    });
});

router.get('/new', (req, res) => {
    res.render('prehistoric-creatures/new.ejs')
});

router.get('/:idx', (req, res) => {
    let creature = fs.readFileSync('./prehistoric-creatures.json')
    let creatureData = JSON.parse(creature)
    let creatureIndex = parseInt(req.params.idx)
    res.render('prehistoric-creatures/show.ejs', {myCreature: creatureData[creatureIndex]})
})

router.post('/', (req, res) => {
    let creature = fs.readFileSync('./prehistoric-creatures.json');
    let creatureData = JSON.parse(creature);
    creatureData.push(req.body);
    fs.writeFileSync('./prehistoric-creatures.json', JSON.stringify(creatureData));
    res.redirect('/prehistoric-creatures')
})

module.exports = router