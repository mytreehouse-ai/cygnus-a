import { Profile } from "./profile.type";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
  groups: string[];
  permissions: string[];
  profile: Profile;
}
