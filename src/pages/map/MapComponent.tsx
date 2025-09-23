import { useEffect, useRef } from "react";

declare global {
  interface Window {
    mapgl: any;
  }
}

const MapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (!document.querySelector("#mapgl-script")) {
      const script = document.createElement("script");
      script.id = "mapgl-script";
      script.src = "https://mapgl.2gis.com/api/js/v1";
      script.async = true;

      script.onload = () => {
        initMap();
      };

      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (mapContainerRef.current && window.mapgl) {
        mapRef.current = new window.mapgl.Map(mapContainerRef.current, {
          center: [74.613681, 42.88977],
          zoom: 16,
          key: "efb4da04-e587-4bfe-bbd7-66a97839cfb3",
          locale: "ky_KG",
        });

        markerRef.current = new window.mapgl.Marker(mapRef.current, {
          coordinates: [74.613681, 42.88977],
          label: {
            text: "",
          },
        });
      }
    }

    return () => {
      if (markerRef.current) markerRef.current.destroy();
      if (mapRef.current) mapRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "160px", borderRadius: "8px" }}
    />
  );
};

export default MapComponent;
