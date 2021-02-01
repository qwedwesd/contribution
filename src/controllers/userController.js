// const db = require('../models').default;
import model from '../models/index';

const { User } = model;

class UserController {
   getUser = async (req, res) => {
     const { token } = req.query;
     res.status(200).json({ token, message: 'Hissss' });
   };

    getAllUser = async (req, res) => {
      res.status(200).json(await User.findAll());
    };
}
export default new UserController();
