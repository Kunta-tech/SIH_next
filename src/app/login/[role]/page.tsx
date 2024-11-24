'use client'
import {use} from 'react';
import { useRouter } from 'next/navigation'
// import Login from "../../../components/login.js"

function RoleLoginPage({
  params,
} : {
  params: Promise<{ role: string }>,
}) {
  const resolvedParams = use(params); // Unwrap the Promise
  const router = useRouter();
  let redir = '';
  if( resolvedParams.role === 'invigilator' ){
    redir = 'invigilator';
  }else if( resolvedParams.role === 'admin' ){
    redir = 'admin';
  }else{
    router.push('/404');
  }
  const handel_log = async () => {
    console.log(`Logged in ${resolvedParams.role}`);
    router.push('/'+redir);
  };

  return (
    <>
    <h1>Login for {resolvedParams.role}</h1>
    <button onClick={handel_log}>Login</button>
    </>
  );
};

export default RoleLoginPage;
