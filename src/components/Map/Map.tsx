import "maplibre-gl/dist/maplibre-gl.css";
import { useMap } from "./hooks/useMap";
import { styles } from "./Map.style";
import type { IMapProps } from "./Map.props";

export const Map = ({ vehicles = [] }: IMapProps) => {
  console.log(vehicles);
  const { mapContainer } = useMap();

  return <div ref={mapContainer} style={styles.map} />;
};
