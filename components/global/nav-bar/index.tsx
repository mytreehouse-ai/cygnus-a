"use client";

import React, { useState } from "react";
import { TreeDeciduous, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const menus = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Listings",
    url: "/listings",
  },
  {
    id: 3,
    name: "Valuation",
    url: "/valuation",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <TreeDeciduous className="text-emerald-500" />
        <div className="hidden items-center gap-x-8 md:inline-flex">
          <div className="space-x-8 font-semibold tracking-wide">
            {menus.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={cn(pathname === item.url && "text-emerald-600")}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button size={"sm"} className="bg-emerald-600 font-normal">
            Add Listing
          </Button>
        </div>
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <Menu className="md:hidden" />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <TreeDeciduous className="text-emerald-500" />
          </SheetHeader>
          <div className="mt-8 flex flex-col gap-y-6">
            {menus.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={cn(pathname === item.url && "text-emerald-600")}
                onClick={() => setSheetOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Separator className="my-4" />
          <Button size={"sm"} className="w-full bg-emerald-600 font-normal">
            Add Listing
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Navbar;
