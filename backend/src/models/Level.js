const { Model, DataTypes } = require('sequelize');

class Level extends Model {
    static init(sequelize){
        super.init({
            level: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Level;