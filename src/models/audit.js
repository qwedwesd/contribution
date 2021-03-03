export default (sequelize, DataTypes) => {
  const audits = sequelize.define('audits', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    paperId: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'audits',
    freezeTableName: true,
  });
  return audits;
};
