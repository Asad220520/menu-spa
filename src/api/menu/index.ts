import { useQuery } from "@tanstack/react-query";
import { apiMenu } from "..";
import { getMenuReq, getMenuRes } from "./type";

export const getMenu = () => {
  return useQuery<getMenuRes, getMenuReq>({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await apiMenu.get("/menu");
      return response.data;
    },
  });
};
