import ReactMapGL, {
  type MapRef,
  type ViewState,
  type ViewStateChangeEvent,
} from "react-map-gl";
import { env } from "@/env.mjs";

//TODO: ADDITIONAL MAP TYPES HERE
interface IMap {
  children?: React.ReactNode;
  initialViewState?: Partial<ViewState>;
  onZoom?: (arg: ViewStateChangeEvent) => void;
}

const Map = ({ children, initialViewState, onZoom }: IMap) => {
  return (
    <ReactMapGL
      mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: "100%", height: "100%" }}
      attributionControl={false}
      initialViewState={initialViewState}
      onZoom={onZoom}
    >
      {children}
    </ReactMapGL>
  );
};

export default Map;
