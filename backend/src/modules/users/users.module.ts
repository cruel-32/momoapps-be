import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailModule } from '@/modules/email/email.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Managings } from './entities/managings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Managings]), EmailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
