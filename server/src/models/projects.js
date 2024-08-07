const {DataTypes}= require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Projects', {
      id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      date:{
        type: DataTypes.STRING,
        allowNull: false
      },
      image:{
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false
      }
    }, 
    {
      timestamps:false
    });
  };
  