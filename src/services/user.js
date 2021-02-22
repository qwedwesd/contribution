import bcrypt from 'bcrypt';
import mailgun from 'mailgun-js';
import model from '../models/index';

const { users } = model;
const { profile } = model;

class UserService {
  getUser = async (id) => {
    const user = await users.findAll({
      where: {
        id,
      },
    });
    return user;
  }

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

  updateprofile = async (id, param) => {
    const {
      name,
      phone,
    } = param;
    try {
      const profiles = await profile.update({
        name,
        phone,
      }, {
        where: {
          userId: id,
        },
      });
      return profiles;
    } catch (error) {
      return false;
    }
  }

  changepassword = async (id, param) => {
    const {
      password,
    } = param;
    try {
      const user = await users.update({
        password: bcrypt.hashSync(password, 10),
      }, {
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      return false;
    }
  }

  sendmail=() => {
    const DOMAIN = 'sandbox704a854ec40948bea2db60705ad709a9.mailgun.org';
    const mg = mailgun({ apiKey: '935d532fc835a8096e2445abd437a6f5-4de08e90-528f3665', domain: DOMAIN });
    const data = {
      from: 's1810931016@gms.nutc.edu.tw',
      to: 's1810931016@gms.nutc.edu.tw',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!',
    };
    mg.messages().send(data, (error, body) => {
      console.log(body);
    });
  }
}
export default new UserService();
