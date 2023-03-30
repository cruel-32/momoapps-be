import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';

import { EmailService } from '@/modules/email/email.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInfo } from './UserInfo';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.save(createUserDto, signupVerifyToken);

    if (process.env.NODE_ENV !== 'development') {
      await this.sendMemberJoinEmail(email, signupVerifyToken);
      return '메일함을 확인하고 인증하세요';
    }

    return '가입되었습니다';
  }

  private checkUserExists(email: string) {
    return false;
  }

  private save(createUserDto: CreateUserDto, signupVerifyToken: string) {
    return;
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    return;
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    throw new Error('Method not implemented');
  }

  async login(email: string, password: string): Promise<string> {
    // TODO
    throw new Error('Method not implemented');
  }

  async getUserInfo(id: string): Promise<UserInfo> {
    // TODO
    throw new Error('Method not implemented');
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
