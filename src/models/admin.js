export default (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'admin',
    freezeTableName: true,
  });
  return admin;
};
