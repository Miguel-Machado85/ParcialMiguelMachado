'use strict';
const { Model, DataTypes, STRING } = require('sequelize');
 
module.exports = (sequelize) => {
  class RentaAuto extends Model {
    static associate(models) {
      // Definir asociaciones aquí si es necesario
    }
  }

  
 
  RentaAuto.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      usuario_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      auto_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dias_rentados: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tarifa_diaria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      renta_Total:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado:{
        type: DataTypes.STRING,
        defaultValue: "NoPagado",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "AutoRenta",
      tableName: "autoRenta", // Especificar nombre de la tabla
      timestamps: true, // Agrega createdAt y updatedAt
    }
  );
 
  return RentaAuto;
}