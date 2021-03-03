export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('profile_role', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    profileId: {
      type: Sequelize.UUID,
      references: {
        model: 'profile',
        key: 'userId',
      },
    },
    roleId: {
      type: Sequelize.UUID,
      references: {
        model: 'roles',
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
  await queryInterface.dropTable('profile_role');
}
