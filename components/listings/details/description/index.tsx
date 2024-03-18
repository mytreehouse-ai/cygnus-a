"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Description() {
  return (
    <Card className="border-none shadow xl:col-span-2">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Description
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent>
        <article className="prose">
          <Markdown remarkPlugins={[remarkGfm]}>
            {
              "Based on your preference for a condominium near Uptown Mall in BGC Taguig, I recommend the following options:\n\n1. [1-Bedroom Condo Unit for Sale in One Uptown Residence BGC, Taguig City](https://www.lamudi.com.ph/1-bedroom-condo-unit-for-sale-in-one-uptown-reside-168866952745.html)\n   - property type: Condominium\n   - listing type: For Sale\n   - floor size: 33.3 sqm\n   - formatted price: ₱8,000,000\n   - address: One Uptown Residence BGC, Taguig City\n   - property features\n      - Indoor features: CCTV, Air conditioning, Alarm System, Basement Parking, Built-in wardrobes, Business Center, Central air conditioning, Elevators, Fire exits, Fitness center, Function Room, Gym, Laundry Area, Reception Area, Smoke detector, Fire Alarm, Fire sprinkler system\n\n2. [For Rent 1 Bedroom Condo in One Uptown Residence, BGC, Taguig](https://www.lamudi.com.ph/for-rent-1-bedroom-condo-in-one-uptown-residence-b-169460995610.html) (Note: This listing appears multiple times in the dataset, indicating high availability.)\n   - property type: Condominium\n   - listing type: For Rent\n   - floor size: 45.0 sqm\n   - formatted price: ₱55,000\n   - address: BGC, Taguig\n   - property features\n      - Indoor features: CCTV, Air conditioning, Built-in wardrobes, Elevators, Fire exits, Function Room, Game Room, Gym, Intercom, Lobby, Reception Area, Shower rooms\n      - Outdoor features: 24-hour security, Shops, Shower rooms, Swimming pool\n\nThese properties are located in One Uptown Residence, which is very close to Uptown Mall, aligning with your preference for proximity. The first option is for sale, offering a compact and convenient living space, perfect for individuals or couples. The second option provides rental flexibility, ideal for those not looking to purchase immediately but wanting to enjoy the amenities and lifestyle in BGC near Uptown Mall."
            }
          </Markdown>
        </article>
      </CardContent>
    </Card>
  );
}

export default Description;
