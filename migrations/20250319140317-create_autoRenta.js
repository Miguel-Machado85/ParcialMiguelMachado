'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("autoRenta", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      auto_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      dias_rentados: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tarifa_diaria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      renta_Total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        defaultValue: "NoPagado",
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("autoRenta");
  },
};