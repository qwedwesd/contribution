export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('roles', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    title: {
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
  await queryInterface.dropTable('roles');
}
