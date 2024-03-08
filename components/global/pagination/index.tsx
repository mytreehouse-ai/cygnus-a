"use client";

import React from "react";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  className?: string;
}

const Pagination = ({ className }: PaginationProps) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const handlePreviousPage = () => {
    const currentPage = Math.max(parseInt(searchParams.get("page") || "1"), 1);
    const prevPage = Math.max(currentPage - 1, 1);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", prevPage.toString());

    router.replace(
      `${window.location.pathname}?${newSearchParams.toString()}`,
      {
        scroll: false,
      },
    );
  };

  const handleNextPage = () => {
    const currentPage = parseInt(searchParams.get("page") || "1");
    const nextPage = currentPage + 1;

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", nextPage.toString());

    router.replace(
      `${window.location.pathname}?${newSearchParams.toString()}`,
      {
        scroll: false,
      },
    );
  };

  return (
    <PaginationComponent
      className={cn(className, "text-slate-500 hover:text-slate-600")}
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="bg-slate-200 hover:cursor-pointer hover:bg-slate-300"
            onClick={handlePreviousPage}
          />
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink className="bg-slate-200 hover:bg-slate-300 " href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="h-10 rounded-md bg-slate-200  hover:bg-slate-300" />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext
            className="bg-slate-200 hover:cursor-pointer hover:bg-slate-300"
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
