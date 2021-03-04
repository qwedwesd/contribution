import { v4 as uuidv4 } from 'uuid';

export function up(queryInterface) {
  return queryInterface.bulkInsert('users', [{
    id: uuidv4(),
    email: 'u2@demo.com',
    password: '123',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
}
export async function down(queryInterface) { return queryInterface.bulkDelete('users', null, {}); }
