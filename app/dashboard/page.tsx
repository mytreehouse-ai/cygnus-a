"use client";

import { Button } from "@/components/ui/button";
import { handleSignOut } from "./sign-out";

const DashboardPage = () => {
  return <Button onClick={() => void handleSignOut()}>Sign out</Button>;
};

export default DashboardPage;
