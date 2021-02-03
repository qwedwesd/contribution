export default (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'profile',
    freezeTableName: true,
  });
  profile.associate = (models) => {
    const { users } = models;
    profile.hasOne(users, {
      foreignKey: 'id',
      targetKey: 'userId',
    });
  };
  return profile;
};
