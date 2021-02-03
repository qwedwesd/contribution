export default (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
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
