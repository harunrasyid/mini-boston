import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios";
import type { IRouteResponse } from "@/types/route";

export function useRoutes() {
  const { data: routes, isLoading } = useQuery<IRouteResponse[]>({
    queryKey: ["routes"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/routes`);
      return res.data.data;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });

  const routeList: string[] = routes?.map((route) => route.id) || [];

  return { routes, routeList, isLoading };
}
