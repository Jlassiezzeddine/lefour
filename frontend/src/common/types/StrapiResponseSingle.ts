import { IStrapiPagination } from './StrapiPagination';

export interface IStrapiResponseSingle<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: {
    pagination?: IStrapiPagination;
  };
}
