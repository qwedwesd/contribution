import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

// /api/user?token=123
router.get('/:id', UserController.getUser);

router.get('/', UserController.getAllUser);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.patch('/updateprofile/:id', UserController.updateprofile);
router.patch('/changepassword/:id', UserController.changepassword);
router.post('/sendmail', UserController.sendmail);
// put 全部修改 patch 修改部分

// router.post('/update',UserController.updateUser);
/*
// /api/user/123
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id, message: 'Hi' });
});
*/

/*
// /api/user
router.get('/', (req, res) => {
  res.status(200).json({ message: 'ASD' });
});
*/

export default router;
