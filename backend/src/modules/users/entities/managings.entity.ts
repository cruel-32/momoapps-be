import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { Role } from './role.entity';

@Entity({ name: 'managings' })
export class Managings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Role)
  roles: Role;
}
