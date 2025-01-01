import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-slate-400 flex justify-center items-center">
<div>
  <Link href={"/editor"} className="px-8 py-6 text-lg bg-blue-500 text-white font-bold hover:px-16 translate-x-6 ease-in-out hover:bg-blue-300 hover:text-black ">
  <button>Editor </button> </Link>
  <Link href={"/viewer"} className="px-8 py-6 text-lg bg-blue-500 text-white font-bold hover:px-16 translate-x-6 ease-in-out  transition-all hover:bg-blue-300 hover:text-black ">
  <button>Viewer </button></Link>
  <Link href={"/3d-render"} className="px-8 py-6 text-lg bg-blue-500 text-white font-bold hover:px-16 translate-x-6 ease-in-out  transition-all hover:bg-blue-300 hover:text-black ">
  <button>3D Render </button></Link>
  <Link href={"/editor/blogView"} className="px-8 py-6 text-lg bg-blue-500 text-white font-bold hover:px-16 translate-x-6 ease-in-out  transition-all hover:bg-blue-300 hover:text-black ">
  <button>View Blog </button></Link>
</div>
    </div>
  );
}
