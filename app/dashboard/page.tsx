import { auth } from "@/auth";
import LogoutButton from "../auth/logout";

const DashboardPage = async () => {
  const xxx = await auth();

  console.log(xxx);

  return <LogoutButton />;
};

export default DashboardPage;
