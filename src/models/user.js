export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
  });
  users.associate = (models) => {
    const { profile } = models;
    users.hasOne(profile, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };
  return users;
};
