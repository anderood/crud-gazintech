const User = require("../models/User");
const Level = require("../models/Level");

module.exports = {
    async index(req, res){

        const result = await User.findAll({include: [{all:true}]});
        return res.status(200).json(result);
    },
    async teste(req, res){
        const { id } = req.params;
        const { level_id, name, gender, birthday, hobby, urlimg } = req.body;

        const result = await User.findByPk(id);
        if(result == null){
            return res.status(400).json({Error: 'Usuario Nao Encontrado'})
        }
        return res.status(200).json(result);

        
    },
    async store(req, res){
        try {
            const { level_id, name, gender, birthday, hobby, urlimg } = req.body;
            const create_user = await User.create({ level_id, name, gender, birthday, hobby, urlimg })
            return res.status(201).json(create_user);
            
        } catch (error) {
            return res.status(400).json({Error: 'Algo de Errado Não esta Certo 😁 '});
        }
    },

    async update(req, res){
        try {
            const { id } = req.params;
            const {level_id, name, gender, birthday, hobby, urlimg} = req.body;
            const update_user = await User.update({level_id: level_id, name: name, gender: gender, birthday:birthday, hobby:hobby, urlimg:urlimg}, {where: {id}});
            return res.status(200).json(update_user);
        } catch (error) {
            return res.status(400).json({Error: 'Algo de Errado Não esta Certo 😁'});
        }
    }, 
    async delete(req, res){
        const { id } = req.params;
        await User.destroy({where:{id: id}});
        return res.status(204).send();
    }
}