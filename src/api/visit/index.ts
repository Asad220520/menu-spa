import { useQuery } from "@tanstack/react-query";
import { apiVisit } from "..";
import { getVisitReq, getVisitRes } from "./type";

const getVisit = () => {
  return useQuery<getVisitRes, getVisitReq>({
    queryKey: ["visit"],
    queryFn: async () => {
      const response = await apiVisit.get("/visit");
      return response.data;
    },
  });
};

export { getVisit };
