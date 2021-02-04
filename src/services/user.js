import bcrypt from 'bcrypt';
import model from '../models/index';

const { users } = model;
const { profile } = model;

class UserService {
  getAllUser = async () => {
    const user = await users.findAll();
    return user;
  }

  /** 透過信箱取得用戶
   *
   * @param {object} param
   * @returns {object}
   */
  getUserByEmail = async (param) => {
    const { email } = param;
    const user = users.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  registerUser = async (param) => {
    const {
      name, email, password, phone,
    } = param;
    try {
      const user = users.create({
        email,
        password: bcrypt.hashSync(password, 10),
        profile: [{
          name,
          phone,
        }],
      }, { include: [profile] });
      return user;
      // return user;
    } catch (error) {
      return false;
    }
  }

  compareHash = (plain, compare) => {
    const response = bcrypt.compareSync(plain, compare);
    return response;
  }
}
export default new UserService();
