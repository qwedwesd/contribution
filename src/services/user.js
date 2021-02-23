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
      html: `
      <!doctype html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <title>

          </title>
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <!--<![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style type="text/css">
            #outlook a { padding:0; }
            body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
            table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
            img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
            p { display:block;margin:13px 0; }
          </style>
          <!--[if mso]>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->

        <!--[if !mso]><!-->
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
          <style type="text/css">
            @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
          </style>
        <!--<![endif]-->

      <style type="text/css">
        @media only screen and (min-width:480px) {
          .mj-column-per-100 { width:100% !important; max-width: 100%; }
        }
      </style>

          <style type="text/css">

          </style>

        </head>
        <body style="word-spacing:normal;background-color:#eeeeee;">

        <div
           style="background-color:#eeeeee;"
        >

        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

        <div  style="margin:0px auto;max-width:600px;">

          <table
             align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
          >
            <tbody>
              <tr>
                <td
                   style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
                >
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

        <div
           class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >

        <table
           border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
          <tbody>

                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >

        <div
           style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
        >This is the header</div>

                  </td>
                </tr>

          </tbody>
        </table>

        </div>

            <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

        <div  style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

          <table
             align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"
          >
            <tbody>
              <tr>
                <td
                   style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
                >
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

        <div
           class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >

        <table
           border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
          <tbody>

                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >

        <div
           style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
        ><h2>註冊</h2></div>

                  </td>
                </tr>

          </tbody>
        </table>

        </div>

            <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

        <div  style="margin:0px auto;max-width:600px;">

          <table
             align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
          >
            <tbody>
              <tr>
                <td
                   style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
                >
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

        <div
           class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
        >

        <table
           border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
        >
          <tbody>

                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >

        <div
           style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#555555;"
        >This is the footer</div>

                  </td>
                </tr>

          </tbody>
        </table>

        </div>

            <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <!--[if mso | IE]></td></tr></table><![endif]-->

        </div>

        </body>
      </html>
    `,
    };
    mg.messages().send(data, (error, body) => {
      console.log(body);
    });
  }
}
export default new UserService();
