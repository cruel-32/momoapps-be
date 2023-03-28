import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { RoleManagings } from './entities/roleManagings.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Role, RoleManagings])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
