const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            gender: DataTypes.STRING,
            birthday: DataTypes.INTEGER,
            hobby: DataTypes.STRING,
            urlimg: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Level, {foreignKey: 'level_id'})
    }
}
module.exports = User;