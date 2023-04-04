import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { RoleEntity } from './role.entity';

@Entity({ name: 'Managing' })
export class ManagingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => RoleEntity)
  roles: RoleEntity;
}
