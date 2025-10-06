import "maplibre-gl/dist/maplibre-gl.css";
import { useMap } from "./hooks/useMap";
import { styles } from "./Map.style";
import type { IMapProps } from "./Map.props";
import { useEffect } from "react";
import { ScatterplotLayer } from "deck.gl";
import type { IVehicle } from "@/types/vehicle";

export const Map = ({ vehicles = [] }: IMapProps) => {
  console.log(vehicles);
  const { mapContainer, overlayRef } = useMap();

  useEffect(() => {
    if (mapContainer.current && overlayRef.current && vehicles) {
      const vehicleLayer = new ScatterplotLayer({
        id: "vehicle-scatter",
        data: vehicles,
        getPosition: (d: IVehicle) => [
          d.attributes.longitude,
          d.attributes.latitude,
        ],
        getRadius: 10,
        getFillColor: [255, 0, 0],
        pickable: true,
        radiusScale: 1,
        radiusMinPixels: 3,
        radiusMaxPixels: 10,
        stroked: true,
        getLineColor: [255, 255, 255],
        lineWidthMinPixels: 1,
      });

      overlayRef.current.setProps({
        layers: [vehicleLayer],
      });
    }
  }, [vehicles, mapContainer, overlayRef]);

  return <div ref={mapContainer} style={styles.map} />;
};
