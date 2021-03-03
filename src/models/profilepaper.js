export default (sequelize, DataTypes) => {
  const profilePaper = sequelize.define('profile_paper', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    profileId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    paperId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  }, {
    sequelize,
    modelName: 'profile_paper',
    freezeTableName: true,
  });
  return profilePaper;
};
