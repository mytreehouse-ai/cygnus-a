import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SquareCheckBigIcon } from "lucide-react";

interface AmenitiesProps {
  indoorFeatures: string[];
  outdoorFeatures: string[];
  otherFeatures: string[];
}

function Amenities({
  indoorFeatures,
  outdoorFeatures,
  otherFeatures,
}: AmenitiesProps) {
  return (
    <Card className="border-none shadow xl:col-span-2">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Property Amenities
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-500">INDOOR FEATURES</p>
          <ul className="grid grid-cols-3 gap-y-2">
            {indoorFeatures.map((amenity, i) => (
              <li
                className="inline-flex items-center gap-x-2 text-sm font-medium"
                key={i}
              >
                <SquareCheckBigIcon className="h-4 w-4 text-emerald-600" />
                <p>{amenity}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-500">OUTDOOR FEATURES</p>
          <ul className="grid grid-cols-3 gap-y-2">
            {outdoorFeatures.map((amenity, i) => (
              <li
                className="inline-flex items-center gap-x-2 text-sm font-medium"
                key={i}
              >
                <SquareCheckBigIcon className="h-4 w-4 text-emerald-600" />
                <p>{amenity}</p>
              </li>
            ))}
          </ul>
        </div>
        {otherFeatures.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-500">OTHER FEATURES</p>
            <ul className="grid grid-cols-3 gap-y-2">
              {otherFeatures.map((amenity, i) => (
                <li
                  className="inline-flex items-center gap-x-2 text-sm font-medium"
                  key={i}
                >
                  <SquareCheckBigIcon className="h-4 w-4 text-emerald-600" />
                  <p>{amenity}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Amenities;
