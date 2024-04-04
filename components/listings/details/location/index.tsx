import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Home } from "lucide-react";
import Map from "@/components/global/map";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ILocation {
  latitude: number;
  longitude: number;
  address?: string;
}

const Location = ({ latitude, longitude, address }: ILocation) => {
  return (
    <Card className="border-none shadow xl:col-span-2">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Address{address ? `:${address}}` : ""}
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent className="h-96 w-full">
        <Map
          initialViewState={{
            latitude,
            longitude,
            zoom: 14,
            bearing: 0,
            pitch: 0,
          }}
        >
          <Marker anchor="top" longitude={longitude} latitude={latitude}>
            <PinnedLocationMarker />
          </Marker>
        </Map>
      </CardContent>
    </Card>
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
