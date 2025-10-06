import { useEffect, useRef } from "react";
import { Map, MapStyle, Map as MapTilerType } from "@maptiler/sdk";
import { MapboxOverlay } from "@deck.gl/mapbox";

const KEY = import.meta.env.VITE_MAPTILER_KEY as string;

export function useMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapTilerType | null>(null);
  const overlayRef = useRef<MapboxOverlay | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new Map({
      container: mapContainer.current,
      apiKey: KEY,
      style: MapStyle.STREETS,
      center: [-71.0589, 42.3601], // Boston center area
      zoom: 15.5,
      pitch: 60,
      maxTileCacheSize: 500,
      maxTileCacheZoomLevels: 5,
      maptilerLogo: false,
      attributionControl: false,
    });

    mapRef.current = map;

    const overlay = new MapboxOverlay({ layers: [] });
    overlayRef.current = overlay;
    map.addControl(overlay);

    return () => {
      // Cleanup function
      overlay.finalize();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return { mapContainer, mapRef, overlayRef };
}
