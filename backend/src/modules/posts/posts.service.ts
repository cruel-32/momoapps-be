import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  // async findWithPagination(
  //   options: IPaginationOptions,
  // ): Promise<Pagination<Srobot>> {
  //   const queryBuilder = this.srobotRepository.createQueryBuilder('c');
  //   queryBuilder.orderBy('c.id', 'DESC'); // Or whatever you need to do

  //   return parseIntPageMeta(await paginate<Srobot>(queryBuilder, options));
  // }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
