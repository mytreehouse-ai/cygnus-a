import ReactMapGL, { type MapRef, type ViewState } from "react-map-gl";
import { env } from "@/env.mjs";

interface IMap {
  children?: React.ReactNode;
  initialViewState?: Partial<ViewState>;
}

const Map = ({ children, initialViewState }: IMap) => {
  return (
    <ReactMapGL
      mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: "100%", height: "100%" }}
      attributionControl={false}
      initialViewState={initialViewState}
    >
      {children}
    </ReactMapGL>
  );
};

export default Map;
