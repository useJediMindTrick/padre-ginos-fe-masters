/**
 * Fetches past orders for a given page
 * @param {number} page - The page number to fetch
 * @returns {Promise<{orders: Array, totalPages: number}>}
 */
export default async function getPastOrders(page) {
  const response = await fetch(`api/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
