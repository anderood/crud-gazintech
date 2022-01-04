const { Model, DataTypes } = require('sequelize');

class Level extends Model {
    static init(sequelize){
        super.init({
            level: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.User, {foreignKey: 'level_id'})
    }
}
module.exports = Level;