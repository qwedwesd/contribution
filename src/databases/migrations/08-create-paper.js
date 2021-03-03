export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('papers', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    themeId: {
      type: Sequelize.UUID,
      references: {
        model: 'subjects',
        foreignKey: 'id',
      },
    },
    title: {
      type: Sequelize.STRING,
    },
    abstract: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    organization: {
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
  await queryInterface.dropTable('papers');
}
