import { Pagination } from 'nestjs-typeorm-paginate';
export const newArray = (length = 0) => {
  const list = new Array(length);
  for (let i = 0, len = list.length; i < len; i++) {
    list[i] = null;
  }
  return list;
};

export function parseIntPageMeta<T>(pagination: Pagination<T>) {
  return {
    ...pagination,
    meta: {
      ...pagination.meta,
      currentPage: parseInt(pagination.meta.currentPage.toString() || '0', 10),
      itemsPerPage: parseInt(pagination.meta.itemsPerPage.toString() || '0', 10),
    },
  };
}
