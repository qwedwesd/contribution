export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('permission_role', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    roleId: {
      type: Sequelize.UUID,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    permissionId: {
      type: Sequelize.UUID,
      references: {
        model: 'permissions',
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
  await queryInterface.dropTable('permission_role');
}
