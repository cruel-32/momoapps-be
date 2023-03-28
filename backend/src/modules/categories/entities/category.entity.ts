import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @ManyToOne((type) => Category, (category) => category.children)
  parent: Category;

  @OneToMany((type) => Category, (category) => category.parent)
  children: Category[];
}
