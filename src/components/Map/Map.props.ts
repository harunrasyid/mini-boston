import type { IVehicle } from "@/types/vehicle";

export interface IMapProps {
  vehicles?: IVehicle[];
  shapes?: [number, number][][] | undefined;
}
