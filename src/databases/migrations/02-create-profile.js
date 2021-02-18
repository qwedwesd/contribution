export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('profile', {
    userId: {
      primaryKey: true,
      references: {
        model: 'users',
        foreignKey: 'id',
      },
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
    },
    phone: {
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
  await queryInterface.dropTable('profile');
}
