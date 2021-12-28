const User = require("../models/User")

module.exports = {
    async index(req, res){
        const result = await User.findAll();
        return res.json(result);
    },
    async store(req, res){
        const { name, gender, age, hobby} = req.body

        const create_user = await User.create({ name, gender, age, hobby});
        return res.json(create_user);
    },
    async update(req, res){
        const { id } = req.params;
        const { name, gender, age, hobby } = req.body;
        const result = await User.upsert({name: name, gender: gender, age: age, hobby: hobby}, {where: {id: id}});
        return res.json(result);
    },

    async delete(req, res){
        const { id } = req.params;
        await User.destroy({where:{id: id}})
        return res.send();
    }
}