import { useQuery } from "@tanstack/react-query";
import { apiProduct } from "..";
import { getProductReq, getProductRes } from "./type";

export const getProduct = () => {
  return useQuery<getProductRes, getProductReq>({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await apiProduct.get("/product");
      return response.data;
    },
  });
};
