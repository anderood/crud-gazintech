const Level = require("../models/Level");

module.exports = {

    async index(req, res){
        const result = await Level.findAll();
        return res.json(result);
    },
    
    async store(req, res){
        const { level } = req.body
        const create_level = await Level.create({level});
        return res.status(201).json(create_level);
    },
}