import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { Role } from './role.entity';

@Entity({ name: 'roleManagings' })
export class RoleManagings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Role)
  roles: Role;
}
