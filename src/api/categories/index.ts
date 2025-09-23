import { useQuery } from "@tanstack/react-query";
import { apiCategories } from "..";
import { getCategoriesReq, getCategoriesRes } from "./type";

export const getCategories = () => {
  return useQuery<getCategoriesRes, getCategoriesReq>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await apiCategories.get("/categories");
      return response.data;
    },
  });
};
