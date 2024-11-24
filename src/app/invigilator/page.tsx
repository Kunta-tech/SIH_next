import { FC } from "react";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Invigilator Dadashboard',
  description: 'Invigilator Dadashboard',
}
const InvigilatorHome: FC = () => {
  return <h1>Welcome to the Invigilator Home Page</h1>;
};

export default InvigilatorHome;
