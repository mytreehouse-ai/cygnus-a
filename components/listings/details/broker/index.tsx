"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, LinkIcon } from "lucide-react";

function Broker() {
  return (
    <Card className="h-[11.25rem] border-none shadow">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Our Trusted Broker
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col gap-y-6">
          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <User className="h-4 w-4" /> <span>Product Owner</span>
            </dt>
            <dd className="font-bold">100 sqm</dd>
          </div>
          <div className="flex justify-between text-slate-500">
            <dt className="inline-flex items-center gap-x-2">
              <LinkIcon className="h-4 w-4" /> <span>Url Key</span>
            </dt>
            <dd className="font-bold">100 sqm</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export default Broker;
