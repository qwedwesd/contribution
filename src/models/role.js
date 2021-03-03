export default (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'roles',
    freezeTableName: true,
  });
  roles.associate = (models) => {
    const { profile, permissions } = models;
    roles.belongsToMany(profile, {
      foreignKey: 'roleId',
      through: 'profile_role',
    });
    roles.belongsToMany(permissions, {
      foreignKey: 'roleId',
      through: 'permission_role',
    });
  };
  return roles;
};
