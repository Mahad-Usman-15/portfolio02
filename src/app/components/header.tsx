import Link from "next/link";

export  function NavBar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="text-2xl sm:text-3xl text-orange-700 font-bold m-3 sm:ml-20 italic text-center sm:text-left">
         Portfolio
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row justify-center  sm:justify-between items-center text-lg sm:text-xl sm:mr-20 gap-2 sm:gap-4 text-gray-500">
          <Link href="./"><li className="hover:text-orange-500 ">Home</li></Link>
          <Link href="./about"><li className="hover:text-orange-500 ">About</li></Link>
          <Link href="projects"><li className="hover:text-orange-500 ">Projects</li></Link>
          <Link href="contact"><li className="hover:text-orange-500 ">Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}
