import UserService from '../services/user';

class UserController {
   getUser = async (req, res) => {
     const { id } = req.params;
     const user = await UserService.getUser(id);
     res.status(200).json({ user });
   };

    getAllUser = async (req, res) => {
      const user = await UserService.getAllUser();
      res.status(200).json({ user });
    };

    registerUser = async (req, res) => {
      const { body } = req;

      const existUser = await UserService.getUserByEmail(body);
      if (existUser) {
        res.status(404).json({ message: '該email已有人使用' });
        return;
      }
      const user = await UserService.registerUser(body);
      if (!user) {
        res.status(400).json({ message: '輸入的內容有誤' });
        return;
      }
      res.status(200).json({ message: '註冊成功' });
    }

    loginUser = async (req, res) => {
      const { body } = req;
      const existUser = await UserService.getUserByEmail(body);
      if (!existUser) {
        res.status(404).json({ message: '沒有該用戶' });
        return;
      }
      const compare = UserService.compareHash(body.password, existUser.password);
      if (!compare) {
        res.status(400).json({ message: '密碼輸入錯誤' });
        return;
      }
      res.status(200).json({ message: '登入成功' });
    }

    updateprofile = async (req, res) => {
      const { body } = req;
      const { id } = req.params;
      const profiles = await UserService.updateprofile(id, body);
      if (!profiles) {
        res.status(400).json({ message: '輸入的內容有誤' });
        return;
      }
      res.status(200).json({ message: '修改成功' });
    }
}
export default new UserController();
