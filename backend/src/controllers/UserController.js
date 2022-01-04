const User = require("../models/User");

module.exports = {
    async index(req, res){
        const result = await User.findAll();
        return res.json(result);
    },
    async store(req, res){
        const { level_id, name, gender, birthday, hobby, urlimg } = req.body;
        console.log(level_id)

        const create = await User.create({ level_id, name, gender, birthday, hobby, urlimg })
        return res.json(create);
    }
}