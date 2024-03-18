"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Description() {
  return (
    <Card className="border-none shadow">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Description
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent>
        <article className="prose w-full">
          <Markdown remarkPlugins={[remarkGfm]}>
            {
              "- **Spacious Warehouse for Rent in Quezon City, 500sqm P200,000**\n  - [View Property](https://www.myproperty.ph/spacious-warehouse-for-rent-in-quezon-city-500sqm-200000.html)\n  - **Property Type**: Warehouse\n  - **Listing Type**: For Rent\n  - **Size Details**: 500 sqm\n  - **Price**: Php 200,000\n  - **Location**: Novaliches, Quezon City\n  - **Features**: Accessible location 📍, 24/7 security 🛡, Ideal for storage and distribution 📦\n  - **Why Recommended**: This warehouse is ideal for those looking for a spacious area for storage and distribution in Quezon City, with the benefit of 24/7 security and an accessible location.\n\n- **Industrial Warehouse in Laguna for Sale, 1000sqm P15M**\n  - [View Property](https://www.myproperty.ph/industrial-warehouse-in-laguna-for-sale-1000sqm-15m.html)\n  - **Property Type**: Warehouse\n  - **Listing Type**: For Sale\n  - **Size Details**: 1000 sqm\n  - **Price**: Php 15,000,000\n  - **Location**: Calamba, Laguna\n  - **Features**: High ceiling 🏗, Office space 🏢, Near SLEX 🚗\n  - **Why Recommended**: Perfect for manufacturing businesses looking for a high-ceiling warehouse with office space, located near SLEX for easy logistics.\n\n- **High-Ceiling Warehouse in Bulacan for Rent, 850sqm P230,000**\n  - [View Property](https://www.myproperty.ph/high-ceiling-warehouse-in-bulacan-for-rent-850sqm-230000.html)\n  - **Property Type**: Warehouse\n  - **Listing Type**: For Rent\n  - **Size Details**: 850 sqm\n  - **Price**: Php 230,000\n  - **Location**: Marilao, Bulacan\n  - **Features**: Perfect for manufacturing or storage 🏭, Office and worker facilities 🏢, Near NLEX 🛣\n  - **Why Recommended**: This property is an excellent choice for businesses requiring a high-ceiling warehouse with facilities for manufacturing or storage, conveniently located near NLEX."
            }
          </Markdown>
        </article>
      </CardContent>
    </Card>
  );
}

export default Description;
