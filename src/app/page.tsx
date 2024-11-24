import Link from "next/link";
export default function home(){
  return (
    <>
      <h1>Hello World!</h1>
      <Link href={"/login"}><button>Login Now</button></Link>
      <Link href={"/login/invigilator"}><button>Initiate now</button></Link>
    </>
);
}