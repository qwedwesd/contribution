export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('reviews', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    status: {
      type: Sequelize.STRING,
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
        foreignKey: 'userId',
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
  await queryInterface.dropTable('reviews');
}
