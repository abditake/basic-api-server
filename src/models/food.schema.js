module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    vegetables: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fruits: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
