export default (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      primaryKey: true,
      type: DataTypes.UUID,
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
    const {
      users, roles, reviews, audits, papers,
    } = models;
    profile.belongsToMany(roles, {
      foreignKey: 'profileId',
      through: 'profile_role',
    });
    profile.belongsToMany(papers, {
      foreignKey: 'profileId',
      through: 'profile_role',
    });
    profile.belongsTo(users, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
    profile.hasMany(reviews, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
    profile.hasMany(audits, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };
  return profile;
};
