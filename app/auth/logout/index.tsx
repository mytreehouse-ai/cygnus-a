"use client";

import { handleSignOut } from "./_sign-out";

import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return <Button onClick={() => void handleSignOut()}>Sign out</Button>;
};

export default LogoutButton;
