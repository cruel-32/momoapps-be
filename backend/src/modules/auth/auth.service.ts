import { ConfigType } from '@nestjs/config';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { AuthConfig } from '../../../config/config';
import { string } from 'joi';

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
    console.log('payload ::::: ', payload);
    console.log('this.config.secret ::::: ', this.config.secret);

    return jwt.sign(payload, this.config.secret, {
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }

  verify(jwtString: string) {
    try {
      const payload = jwt.verify(jwtString, this.config.secret) as (
        | jwt.JwtPayload
        | string
      ) &
        User;
      const { id, email } = payload;
      return {
        id,
        email,
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
