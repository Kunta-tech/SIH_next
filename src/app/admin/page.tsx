import { FC } from "react";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Admin Dadashboard',
  description: 'Admin Dadashboard',
}
const AdminHome: FC = () => {
  return <h1>Welcome to the Admin Home Page</h1>;
};

export default AdminHome;
