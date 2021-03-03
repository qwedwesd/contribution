export default (sequelize, DataTypes) => {
  const papers = sequelize.define('papers', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    themeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
    },
    abstract: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    organization: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'papers',
    freezeTableName: true,
  });
  papers.associate = (models) => {
    const {
      reviews, audits, keywords, profile,
    } = models;
    papers.hasMany(reviews, {
      foreignKey: 'paperId',
      targetKey: 'id',
    });
    papers.hasMany(audits, {
      foreignKey: 'paperId',
      targetKey: 'id',
    });
    papers.belongsToMany(keywords, {
      foreignKey: 'paperId',
      through: 'paper_keyword',
    });
    papers.belongsToMany(profile, {
      foreignKey: 'paperId',
      through: 'profile_paper',
    });
  };
  return papers;
};
