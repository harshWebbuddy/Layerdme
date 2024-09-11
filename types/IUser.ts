export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  website: string;
  email: string;
  profile?: string;
  company: string;
  role: string;
  city: string;
  country: string;
  phoneNumber: string;
  referralId?: string;
  verified: boolean;
  password?: string;
}
