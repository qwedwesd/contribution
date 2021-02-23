export default (sequelize, DataTypes) => {
  const subjects = sequelize.define('subjects', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    theme: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'subjects',
    freezeTableName: true,
  });
  return subjects;
};
