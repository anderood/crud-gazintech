const User = require("../models/User")

module.exports = {
    async store(req, res){
        const { name, gender, age, hobby} = req.body

        const user = await User.create({ name, gender, age, hobby});
        return res.json(user);
    }
}