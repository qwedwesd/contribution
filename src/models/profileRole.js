export default (sequelize, DataTypes) => {
  const profileRoles = sequelize.define('profile_role', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    profileId: {
      type: DataTypes.UUID,
    },
    roleId: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'profile_role',
    freezeTableName: true,
  });
  return profileRoles;
};
