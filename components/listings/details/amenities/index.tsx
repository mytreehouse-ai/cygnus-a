import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SquareCheckBigIcon } from "lucide-react";

const DUMMY_AMENITIES = [
  "CCTV",
  "Utility room",
  "Air conditioning",
  "Alarm System",
  "Balcony",
  "Basement Parking",
  "Elevators",
  "Fire exits",
  "Fitness center",
  "Function Room",
  "Game Room",
  "Indoor spa",
  "Lobby",
  "Lounge",
  "Multi-Purpose Hall",
  "Smoke detector",
  "Wi-Fi",
  "Fire Alarm",
  "Swimming Pool",
  "Garden Area",
  "Pet Friendly",
  "24-hour Security",
  "Backup Generator",
  "Children's Playground",
  "Jogging Path",
  "Laundry Room",
  "Meeting Rooms",
  "Parking Lot",
  "Reception Area",
  "Rooftop Terrace",
  "Sauna",
  "Solarium",
  "Storage Room",
  "Study Room",
  "Sun Deck",
  "Theater Room",
  "Valet Parking",
  "Visitor Parking",
];

function Amenities() {
  return (
    <Card className="border-none shadow xl:col-span-2">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Property Ameneties
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs font-bold text-gray-500">INDOOR FEATURES</p>
        <ul className="grid grid-cols-3 gap-y-2">
          {DUMMY_AMENITIES.map((amenity, i) => (
            <li
              className="inline-flex items-center gap-x-2 text-sm font-medium"
              key={i}
            >
              <SquareCheckBigIcon className="h-4 w-4 text-emerald-600" />
              <p>{amenity}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Amenities;
