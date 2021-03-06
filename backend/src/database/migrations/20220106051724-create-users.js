'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }, 
      level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'levels', key: 'id'},
        onUpdate: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      }, 
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hobby: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      urlimg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      }, 
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }, 

    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
