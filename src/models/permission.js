export default (sequelize, DataTypes) => {
  const permissions = sequelize.define('permissions', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    right: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'permissions',
    freezeTableName: true,
  });
  permissions.associate = (models) => {
    const { roles } = models;
    permissions.belongsToMany(roles, {
      foreignKey: 'permissionId',
      through: 'permission_role',
    });
  };
  return permissions;
};
