import Link from "next/link";

const Options = () => {
  return (
    <div className="h-screen px-8 flex flex-col md:mx-48">
        <div className=" bg-violet-700 bg-opacity-45 mx-3 h-auto flex justify-center items-center rounded-t-2xl mt-28 shadow-sm py-8 overflow-hidden">
            <h1 className=" text-4xl font-bold text-blue-200">Welcome</h1>
        </div>
        <div className=" bg-violet-700 bg-opacity-25 h-auto flex flex-col justify-center items-center rounded-2xl shadow-sm py-10">
            <h3 className=" text-xl font-bold mb-4 text-white">Click on the category below </h3>
            <div className="bg-slate-500 bg-opacity-75 h-auto flex flex-col justify-center items-center rounded-2xl shadow-2xl py-5 w-[70%] ">
              <Link href={"/options/health"}>
                <button className=" bg-sky-800 text-white text-xl rounded-3xl p-1 w-28 font-bold mb-5">Health</button>
              </Link>

              <Link href={"/options/sport"}>
                <button className=" bg-sky-800 text-white text-xl rounded-3xl p-1 w-28 font-bold mb-5">Sport</button>
              </Link>

              <Link href={"/options/study"}>
                <button className=" bg-sky-800 text-white text-xl rounded-3xl p-1 w-28 font-bold">Study</button>
              </Link>   
            </div>         
        </div>
   
    </div>
  )
}

export default Options