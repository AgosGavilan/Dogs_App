const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //me genera automaticamente un UUISV4
      unique: true,
      primaryKey: true,
      allowNull: false //allowNull(permite un vacio) --> FALSO
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    heightMin: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    heightMax: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    weightMin: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    weightMax: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    life_span: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
  });
};
