import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
        <Image
          width={130}
          height={110}
          alt="Logo.img"
          src={'/Logo.png'}
          className=" rounded-2xl mb-5" />

        <h1 className=" text-4xl font-bold mb-2"> WELCOME</h1>
        <h3 className="text-xl mb-8"> Get started on your journey!</h3>
        <form className=" flex flex-col justify-center items-center"> 
        {/* <input required placeholder="Enter your name" className='w-[80%] mb-3 rounded-2xl p-2 px-4 h-10'></input> */}
          <Link href={"/options"}>
            <button type="submit" className=" bg-sky-800 text-white text-2xl rounded-3xl p-2 w-32 font-bold">START</button>
          </Link>
        </form>
    </main>
  );
}
