import { Product } from "../types/Product";
import { client } from "../utils/fetchClient";

export function getProducts() {
  return client.get<Product[]>('/wines?size=14&sort=id&page=0');
}

export function getSelectedProduct(productId: number) {
  return client.get<Product>(`/wines/${productId}`)
}
