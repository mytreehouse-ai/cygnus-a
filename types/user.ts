import { IProfile } from "./profile";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_superuser: boolean;
  groups: string[];
  permissions: string[];
  profile: IProfile;
}
