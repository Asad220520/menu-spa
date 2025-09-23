import { useQuery } from "@tanstack/react-query";
import { getCategoryReq, getCategoryRes } from "./type";
import { apiCategory } from "..";

export const getCategory = () => {
  return useQuery<getCategoryRes, getCategoryReq>({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await apiCategory.get("/category");
      return response.data;
    },
  });
};
