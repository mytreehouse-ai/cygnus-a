import ReactMapGL, { Marker, type MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { env } from "@/env.mjs";

const Location = () => {
  return (
    <div className="h-full w-full">
      <ReactMapGL
        // mapboxAccessToken="pk.eyJ1IjoiY2FzdWxpdCIsImEiOiJjbGhpaG95b24wN3piM2RwYmNsejBodGIwIn0.s-EaLYosGWCP_yuWppR_wQ"
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default Location;
