import { useQuery } from "@tanstack/react-query";
import { getProductIdReq, getProductIdRes } from "./type";
import { apiProductId } from "..";

export const getProductId = () => {
  return useQuery<getProductIdRes, getProductIdReq>({
    queryKey: ["product/1"],
    queryFn: async () => {
      const response = await apiProductId.get("/product/1");
      return response.data;
    },
  });
};
