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
              "Hello! I understand you're looking for a property near a beach. While I can't provide information on every property near a beach, I do have a property that might interest you.\n\n- **Why Recommended**: This property is located near Lipa City, Batangas, which is known for its beautiful beaches and scenic views. It's a modern logistics hub perfect for business or even a relaxing getaway.\n- [Modern Logistics Hub in Batangas for Rent, 600sqm P180,000](https://www.myproperty.ph/modern-logistics-hub-in-batangas-for-rent-600sqm-180000.html)\n  - **Property Type**: Warehouse\n  - **Listing Type**: For Rent\n  - **Size Details**: 600 sqm\n  - **Price**: Php 180,000\n  - **Location**: Lipa City, Batangas\n  - **Features**: Advanced security systems 🔒, High capacity for logistics operations 📦\n  - **Description**: This modern logistics hub in Batangas offers advanced security systems and high capacity for logistics operations. It's a great opportunity for businesses or those looking for a spacious property in a beautiful location.\n\nPlease let me know if you have any questions or if there's anything else I can help you with!"
            }
          </Markdown>
        </article>
      </CardContent>
    </Card>
  );
}

export default Description;
