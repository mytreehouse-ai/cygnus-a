"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Provides a React Query context to its children components.
// This context will have a single instance of QueryClient throughout the app's lifecycle.
const ReactQueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Use useMemo to avoid recreating the QueryClient on every render.
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
