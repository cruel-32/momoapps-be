import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  RelationId,
} from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  @RelationId((category: Category) => category.children)
  id: number;

  @Column({ length: 20 })
  name: string;

  @OneToMany((type) => Category, (category) => category.id)
  // @RelationId((category: Category) => category.id)
  children: number[];
}
