export default (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    status: {
      type: DataTypes.STRING,
    },
    paperId: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'reviews',
    freezeTableName: true,
  });
  return reviews;
};
