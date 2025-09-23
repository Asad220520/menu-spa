import { apiModern } from ".."; 
import { useQuery } from "@tanstack/react-query";
import { getModernReq, getModernRes } from "./type";

export const getModern = () => {
  return useQuery<getModernRes, getModernReq>({
    queryKey: ["modern"],
    queryFn: async () => {
      const response = await apiModern.get("/modern");
      return response.data;
    },
  });
};
