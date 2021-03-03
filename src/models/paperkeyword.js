export default (sequelize, DataTypes) => {
  const paperKeyword = sequelize.define('paper_keyword', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    keywordId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    paperId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  }, {
    sequelize,
    modelName: 'paper_keyword',
    freezeTableName: true,
  });
  return paperKeyword;
};
