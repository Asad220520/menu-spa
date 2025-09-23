import axios from "axios";

export const apiVisit = axios.create({
  // baseURL: "http://16.171.197.158/ru",
  baseURL: "http://13.60.41.77/ru",
});
export const apiModern = axios.create({
  baseURL: "http://13.60.41.77/ru",
});
export const apiCategories = axios.create({
  // baseURL: "http://16.171.197.158/ru",
  baseURL: "http://13.60.41.77/ru",
});

export const apiCategory = axios.create({
  // baseURL: "http://16.171.197.158/ru",
  baseURL: "http://13.60.41.77/ru",
});

export const apiMenu = axios.create({
  baseURL: "http://13.60.41.77/ru",
});

export const apiProduct = axios.create({
  // baseURL: "http://16.171.197.158/ru",
  baseURL: "http://13.60.41.77/ru",
});
export const apiProductId = axios.create({
  // baseURL: "http://16.171.197.158/ru",
  baseURL: "http://13.60.41.77/ru",
});
