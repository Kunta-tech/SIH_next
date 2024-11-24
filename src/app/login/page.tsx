import Link from "next/link";
export default function login(){
  return (
    <>
      <h1>Login through here</h1>
      <Link href="/login/invigilator"><button>invigilator</button></Link>
      <Link href="/login/admin"><button>admin</button></Link>
    </>
);
}