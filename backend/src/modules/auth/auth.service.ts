import { ConfigType } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { AuthConfig } from '../../../config/config';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(@Inject(AuthConfig.KEY) private config: ConfigType<typeof AuthConfig>) {}

  login(user: User) {
    const payload = { ...user };
    console.log('user ::::: ', user);

    return jwt.sign(payload, this.config.secret, {
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }
}
