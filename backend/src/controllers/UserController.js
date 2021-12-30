const User = require("../models/User")

module.exports = {
    async index(req, res){
        const result = await User.findAll();
        return res.status(200).json(result);
    },
    async store(req, res){
        const { name, gender, age, hobby} = req.body
        const create_user = await User.create({ name, gender, age, hobby});
        return res.status(201).json(create_user);
    },
    async update(req, res){
        const { id } = req.params;
        const { name, gender, age, hobby } = req.body;
        const result = await User.upsert({name: name, gender: gender, age: age, hobby: hobby}, {where: {id: id}});
        return res.status(200).json(result);
    },

    async delete(req, res){
        const { id } = req.params;
        await User.destroy({where:{id: id}})
        return res.status(204).send();
    }
}