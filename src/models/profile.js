export default (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    userId: {
      primaryKey: true,
      references: {
        model: 'users',
        foreignKey: 'id',
      },
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
    profile.belongsTo(users);
  };
  return profile;
};
