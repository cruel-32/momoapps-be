import Mail = require('nodemailer/lib/mailer');
import * as nodemailter from 'nodemailer';
import { Injectable } from '@nestjs/common';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailter.createTransport({
      service: 'Gmail',
      auth: {
        user: 'newmomoapps@gmail.com',
        pass: 'momoapps1227',
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:8080';
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: 'momo 가입 인증 메일',
      html: `
            안녕하세요. momo입니다.<br/>
            가입확인 버튼을 누르시면 가입 인증이 완료됩니다. <br/>
            <form action="${url}" method="POST">
                <button>가입확인</button>
            </form>
        `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
