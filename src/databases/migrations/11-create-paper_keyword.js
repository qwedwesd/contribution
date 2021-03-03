export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('paper_keyword', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    keywordId: {
      type: Sequelize.UUID,
      references: {
        model: 'keywords',
        key: 'id',
      },
    },
    paperId: {
      type: Sequelize.UUID,
      references: {
        model: 'papers',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
export async function down(queryInterface) {
  await queryInterface.dropTable('paper_keyword');
}
