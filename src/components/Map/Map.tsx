import "maplibre-gl/dist/maplibre-gl.css";
import { useMap } from "./hooks/useMap";
import { styles } from "./Map.style";
import type { IMapProps } from "./Map.props";
import { useEffect } from "react";
import { PathLayer, ScatterplotLayer } from "deck.gl";
import type { IVehicle } from "@/types/vehicle";

export const Map = ({ vehicles = [], shapes = [] }: IMapProps) => {
  const { mapContainer, overlayRef } = useMap();

  console.log("shapes", shapes);

  function swapLatLong(arr: [number, number][]): [number, number][] {
    return arr.map(([lat, long]) => [long, lat]);
  }

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

      const layer = new PathLayer({
        id: "route",
        data: shapes,
        getPath: (d) => {
          console.log("d", swapLatLong(d.coor));
          return swapLatLong(d.coor);
        },
        widthMinPixels: 2,
        getColor: [255, 0, 0],
      });

      overlayRef.current.setProps({
        layers: [layer, vehicleLayer],
      });
    }
  }, [vehicles, mapContainer, overlayRef, shapes]);

  return <div ref={mapContainer} style={styles.map} />;
};
