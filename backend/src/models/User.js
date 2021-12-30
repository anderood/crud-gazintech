const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            gender: DataTypes.STRING,
            age: DataTypes.INTEGER,
            hobby: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = User;