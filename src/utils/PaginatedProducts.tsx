import { Product } from "./Product";

export interface PaginatedProducts {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
}
