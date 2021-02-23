import model from '../models/index';

const { subjects } = model;

class SubjectService {
  getAllSubject = async () => {
    const subject = await subjects.findAll();
    return subject;
  }

  /** 透過信箱取得用戶
   *
   * @param {object} param
   * @returns {object}
   */
  getSubjectBytheme = async (param) => {
    const { theme } = param;
    const subject = subjects.findOne({
      where: {
        theme,
      },
    });
    return subject;
  }

  createSubject = async (param) => {
    const {
      theme,
    } = param;
    try {
      const subject = subjects.create({
        theme,
      });
      return subject;
    } catch (error) {
      return false;
    }
  }

  deleteSubject = async (id) => {
    try {
      const subject = subjects.destroy({
        where: {
          id,
        },
      });
      return subject;
    } catch (error) {
      return false;
    }
  }

  updateSubject = async (id, param) => {
    const {
      theme,
    } = param;
    try {
      const subject = await subjects.update({
        theme,
      }, {
        where: {
          id,
        },
      });
      return subject;
    } catch (error) {
      return false;
    }
  }
}
export default new SubjectService();
