export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('audits', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    paperId: {
      type: Sequelize.UUID,
      references: {
        model: 'papers',
        foreignKey: 'id',
      },
    },
    userId: {
      type: Sequelize.UUID,
      references: {
        model: 'profile',
        foreignKey: 'id',
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
  await queryInterface.dropTable('audits');
}
