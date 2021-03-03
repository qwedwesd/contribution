export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('permissions', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    right: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
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
  await queryInterface.dropTable('permissions');
}
