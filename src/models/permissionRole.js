export default (sequelize, DataTypes) => {
  const permissionsRoles = sequelize.define('permission_role', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    roleId: {
      type: DataTypes.UUID,
    },
    permissionId: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'permission_role',
    freezeTableName: true,
  });
  return permissionsRoles;
};
