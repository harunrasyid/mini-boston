import { useQuery } from "@tanstack/react-query";
// @ts-expect-error: fix later, its installed but cannot found
import polyline from "@mapbox/polyline";
import type { IShapeResponse } from "@/types/shape";
import axiosInstance from "@/utils/axios";

export function useShapes(routes: string[]) {
  const { data: shapesResponse, isLoading } = useQuery<IShapeResponse[]>({
    queryKey: ["shapes", routes],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/shapes?filter[route]=${routes.join(",")}`
      );
      return res.data.data;
    },
    enabled: !!routes.length,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });

  const convertShapes = (data: IShapeResponse[]) => {
    const res: { id: string; coor: [number, number][] }[] = [];
    data?.forEach((shape) => {
      res.push({
        id: shape.id,
        coor: polyline.decode(shape.attributes.polyline),
      });
    });

    return res;
  };

  return {
    shapes: convertShapes(shapesResponse ?? []),
    isLoading,
  };
}
