import { IStrapiPagination } from './StrapiPagination';

export interface IStrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination?: IStrapiPagination;
  };
}
