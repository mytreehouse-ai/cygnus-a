import ReactMapGL, { Marker, type MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { env } from "@/env.mjs";
import { Home } from "lucide-react";

const Location = () => {
  return (
    <div className="h-full w-full">
      <ReactMapGL
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        attributionControl={false}
        initialViewState={{
          latitude: 14.567197,
          longitude: 121.092265,
          zoom: 15,
        }}
      >
        <Marker anchor="top" longitude={121.092265} latitude={14.567197}>
          <PinnedLocationMarker />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Location;

const PinnedLocationMarker = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-emerald-600 p-3">
        <Home className="h-4 w-4 text-white" />
      </div>
      <div className="mt-[-4px] h-0 w-0 rounded-b-xl border-x-8 border-b-8 border-t-8 border-x-transparent border-b-transparent border-t-emerald-600"></div>
    </div>
  );
};
