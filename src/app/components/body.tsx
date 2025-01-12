import Image from "next/image";
import pic from "../mahaD2 .jpg";
import Link from "next/link";
export default function Main() {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-center sm:text-left">
      <div className="text-2xl sm:text-5xl text-black font-bold m-3 sm:ml-20 mt-10 sm:mt-20 italic text-orange-500">
        <p className="text">
          Hi,
          <br />
          I am Mahad Usman
        </p>
        <p className="text-xl text-orange-300">Web Developer | Student </p>
      
        <Link href="./contact"><button className="text-base italic text-white bg-orange-600 h-7 w-40 shadow-sm sm:w-40 rounded-full hover:bg-gray-500">Hire Me</button></Link>
      
      </div>
      <div className="flex items-center justify-center mt-10 sm:mt-4 sm:mr-40 border border-orange-600 border-[3px]">
  <div className="rounded-none md:rounded-full overflow-hidden w-[200px] h-[200px] sm:w-[200px] sm:h-[250px] md:w-[300px] md:h-[300px]">
    <Image
      src={pic}
      alt="mm"
      className="w-full h-full "
    />
  </div>
</div>



      
      
    </div>
  );
}
