import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailModule } from '@/modules/email/email.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { ManagingEntity } from './entities/managing.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity, ManagingEntity]),
    EmailModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
