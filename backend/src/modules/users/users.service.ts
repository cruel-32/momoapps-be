import * as uuid from 'uuid';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

import { EmailService } from '@/modules/email/email.service';
import { AuthService } from '@/modules/auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserInfoDto } from '@/modules/users/dto/user-info.dto';

@Injectable()
export class UsersService {
  constructor(
    private dataSource: DataSource,
    private emailService: EmailService,
    private authService: AuthService,

    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(createUserDto, signupVerifyToken);
    console.log('signupVerifyToken ::::: ', signupVerifyToken);

    if (process.env.NODE_ENV !== 'development') {
      await this.sendMemberJoinEmail(email, signupVerifyToken);
      return '메일함을 확인하고 인증하세요';
    }

    return '가입되었습니다';
  }

  private async checkUserExists(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
    });

    console.log('user ::::: ', user);

    if (user?.id) {
      throw new BadRequestException('이미 가입된 이메일입니다');
    }
  }

  private saveUser(createUserDto: CreateUserDto, signupVerifyToken: string) {
    this.dataSource.transaction(async (manager) => {
      const { name, email, password } = createUserDto;
      const user = new UserEntity();

      user.name = name;
      user.email = email;
      user.password = password;
      user.signupVerifyToken = signupVerifyToken;

      this.usersRepository.save(user);
    });
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
    return;
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    const user = await this.usersRepository.findOne({
      where: { signupVerifyToken },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return this.authService.login({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  async login(email: string, password: string): Promise<string> {
    // TODO
    const user = await this.usersRepository.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return this.authService.login({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  async getUserInfo(id: number): Promise<UserInfoDto> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return {
      id,
      name: user.name,
      email: user.email,
    };
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
