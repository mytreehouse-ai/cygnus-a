"use client";

import React from "react";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
  className?: string;
}

const Pagination = ({ className }: PaginationProps) => {
  return (
    <PaginationComponent
      className={cn(className, "text-slate-500 hover:text-slate-600")}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="bg-slate-200 hover:bg-slate-300"
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="bg-slate-200 hover:bg-slate-300 " href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="h-10 rounded-md bg-slate-200  hover:bg-slate-300" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className="bg-slate-200 hover:bg-slate-300"
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
