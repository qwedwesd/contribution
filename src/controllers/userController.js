// const db = require('../models').default;
import bcrypt from 'bcrypt';
import model from '../models/index';

const { User } = model;

class UserController {
   getUser = async (req, res) => {
     const { token } = req.query;
     res.status(200).json({ token, message: 's' });
   };

    getAllUser = async (req, res) => {
      res.status(200).json(await User.findAll());
    };

    registerUser = async (req, res) => {
      const {
        name, email, password, phone, // 密碼加密
      } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        res.status(404).json({ message: '該email已有人使用' });
        return;
      }
      await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        phone,
      });
      res.status(200).json({ message: '註冊成功' });
    }

    loginUser = async (req, res) => {
      const {
        email, password,
      } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        res.status(404).json({ message: '沒有該用戶' });
        return;
      }
      const compare = bcrypt.compareSync(password, user.password);
      if (!compare) {
        res.status(400).json({ message: '密碼輸入錯誤' });
        return;
      }
      res.status(200).json({ message: '登入成功' });
    }
    //   const user = await User.findOne({
    //     where: {
    //       email,
    //     },
    //   }).then((user) => {
    //     if (!user) {
    //       res.status(200).json({ message: '沒有該用戶' });
    //     }bcrypt.compare(password, (err, user) => {

  //     });
  //   }).catch((err) => {
  //     res.status(200).json({ message: 'xxxx' });
  //   });
  // };
}
export default new UserController();
