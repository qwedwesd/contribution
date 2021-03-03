export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('subjects', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    theme: {
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
  await queryInterface.dropTable('subjects');
}
