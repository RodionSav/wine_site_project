import { Product, CommentType } from "../types/Product";
import { client } from "../utils/fetchClient";

export function getProducts() {
  return client.get<Product[]>('/wines?size=14&sort=id&page=0');
}

export function getSelectedProduct(productId: number) {
  return client.get<Product>(`/wines/${productId}`)
}

// export function createOrder() {
//   return client.post(`/orders`)
// }

export function getReviews(productId: number) {
  return client.get<CommentType>(`/wines/reviews/wine/${productId}`)
}

export function createReview({wineId, userFirstAndLastName, message}: CommentType) {
  return client.post('/reviews', {wineId, userFirstAndLastName, message})
}