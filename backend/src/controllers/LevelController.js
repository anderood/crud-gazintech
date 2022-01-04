const Level = require("../models/Level");

module.exports = {

    async index(req, res){
        const result = await Level.findAll();
        return res.status(200).json(result);
    },
    
    async store(req, res){
        try {
            const { level } = req.body
            const create_level = await Level.create({level});
            return res.status(201).json(create_level);
        } catch (error) {
            return res.status(400).json(create_level);
        }
    },

    async update(req, res){
        try {
            const { id } = req.params;
            const { level } = req.body;
            const update_level = await Level.update({level: level}, {where: {id}});
            return res.status(200).json(update_level);
        } catch (error) {
            return res.status(400).json({Error: 'Algo de Errado Não esta Certo 😁'});
        }
    }, 

    async delete(req, res){
        const { id } = req.params;
        await Level.destroy({where:{id: id}});
        return res.status(204).send();
    }
}