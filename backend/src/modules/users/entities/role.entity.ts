import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  role: string;
}
