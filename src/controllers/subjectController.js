import SubjectService from '../services/subject';

class SubjectController {
   getAllSubject = async (req, res) => {
     const subject = await SubjectService.getAllSubject();
     res.status(200).json({ subject });
   };

   createSubject = async (req, res) => {
     const { body } = req;

     const existsubject = await SubjectService.getSubjectBytheme(body);
     if (existsubject) {
       res.status(404).json({ message: '該主題以新增過' });
       return;
     }
     const subject = await SubjectService.createSubject(body);
     if (!subject) {
       res.status(400).json({ message: '輸入的內容有誤' });
       return;
     }
     res.status(200).json({ message: '新增主題成功' });
   }

    deleteSubject = async (req, res) => {
      const { id } = req.params;
      const subject = await SubjectService.deleteSubject(id);
      if (!subject) {
        res.status(400).json({ message: '請重新刪除' });
        return;
      }
      res.status(200).json({ message: '刪除成功' });
    }

    updateSubject = async (req, res) => {
      const { body } = req;
      const { id } = req.params;
      const profiles = await SubjectService.updateSubject(id, body);
      if (!profiles) {
        res.status(400).json({ message: '輸入的內容有誤' });
        return;
      }
      res.status(200).json({ message: '修改成功' });
    }
}
export default new SubjectController();
