export default (sequelize, DataTypes) => {
  const subjects = sequelize.define('subjects', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    theme: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'subjects',
    freezeTableName: true,
  });
  subjects.associate = (models) => {
    const { papers } = models;
    subjects.hasMany(papers, {
      foreignKey: 'themeId',
      targetKey: 'id',
    });
  };
  return subjects;
};
