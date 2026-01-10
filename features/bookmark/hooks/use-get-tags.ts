import { useQuery } from "@tanstack/react-query";
import { getAllTags } from "../services/api";

export const useGetTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => getAllTags(),
  });
};
