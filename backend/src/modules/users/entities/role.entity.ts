import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Role' })
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  code: string;

  @Column({ length: 20 })
  name: string;
}
