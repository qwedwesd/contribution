export default (sequelize, DataTypes) => {
  const keywords = sequelize.define('keywords', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    keyword: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'keywords',
    freezeTableName: true,
  });
  keywords.associate = (models) => {
    const { papers } = models;
    keywords.belongsToMany(papers, {
      foreignKey: 'keywordId',
      through: 'paper_keyword',
    });
  };
  return keywords;
};
