import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-yellow-500 p-40 m-200">
      <h1 className="text-3xl">Assignment 14</h1>
      <div className=" flex gap-6 text-red-500 justify-center text-3xl bg-yellow-500">
        <Link href={"/register"}>register</Link>
        <Link href={"/login"}>login</Link>
        <Link href={"/dashboard"}>dashboard</Link>
      </div>
    </div>
  );
}
