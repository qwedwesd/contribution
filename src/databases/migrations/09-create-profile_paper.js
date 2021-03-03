export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('profile_paper', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    profileId: {
      type: Sequelize.UUID,
      references: {
        model: 'profile',
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
  await queryInterface.dropTable('profile_paper');
}
