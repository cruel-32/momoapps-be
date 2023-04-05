import { IsEmail, IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { Transform } from 'class-transformer';
import { NotIn } from '@/decorators/NotIn';

export class CreateUserDto {
  @IsString()
  @Transform((params) => params.value.trim())
  @NotIn('password', { message: 'password는 name과 같은 문자열을 포함할 수 없습니다' })
  @MinLength(2)
  @MaxLength(20)
  readonly name: string;

  @IsString()
  @Transform((params) => params.value.trim())
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Transform((params) => params.value.trim())
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}
