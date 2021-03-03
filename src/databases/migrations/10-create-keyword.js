export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('keywords', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    keyword: {
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
  await queryInterface.dropTable('keywords');
}
