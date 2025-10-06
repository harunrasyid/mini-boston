import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios";
import type { IVehicleResponse } from "@/types/vehicle";

export function useVehicles() {
  const { data: vehicles, isLoading } = useQuery<IVehicleResponse[]>({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/vehicles`);
      return res.data.data;
    },
    refetchOnWindowFocus: false,
    refetchInterval: 1000,
  });

  return {
    vehicles,
    isLoading,
  };
}
