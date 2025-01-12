export default function About() {
    return (
        <div className="flex-col sm:flex-col justify-center sm:justify- items-center ml-9 ">
            <div>
                <h1 className="text-2xl font-bold text-orange-600">About Me</h1>
                <p className="mt-3 text-xl text-gray-400 mr-4">Hi! I'm Mahad Usman, a 16-year-old student currently studying at Saqib Public School, pursuing my matriculation.
                Currently, I am also enrolled in GIAIC, where I’m exploring advanced programming and tech concepts to further enhance my knowledge and skills.
</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-orange-600 mt-4">Skills</h1>
                <ul className="mt-4 text-gray-400 text-xl">
                    <li>Communication skills</li>
                    <li>Time Management</li>
                    <li>Photo Editing</li>
                    <li>Short Video Editing</li>
                    
                </ul>
            </div>
            <div className="mb-6  mt-4 text-2xl font-bold text-orange-600">
                <h3>Specializing In </h3>
            </div>
            <div className="w-60 bg-gray-200 h-10 rounded-md overflow-hidden relative ">
            <div
                className="bg-orange-500 p-1 h-full flex items-center justify-center text-white text-xs font-bold"
                style={{ width: "60%" }}
            >
                HTML-45%
            </div>
        </div>
            <div className="w-60 bg-gray-200 h-10 rounded-md overflow-hidden relative mt-4">
           
            <div
                    className="bg-orange-500 p-full h-full flex items-center justify-center text-white text-xs font-bold"
                style={{ width: "40%" }}
            >
                Typescript-40%
            </div>
        </div>
        <div className="w-60 bg-gray-200 h-10 rounded-md overflow-hidden relative mt-4">
            <div
                className="bg-orange-500 p-full h-full flex items-center justify-center text-white text-xs font-bold"
                style={{ width: "35%" }}
            >
                Next.Js-35%
            </div>
        </div>
       
        <div className="w-60 bg-gray-200 h-10 rounded-md overflow-hidden relative mt-4">
            <div
                className="bg-orange-500 h-full flex items-center justify-center text-white text-xs font-bold "
                style={{ width: "17%" }}
            >
                C-5%
            </div>
        </div>
        
        </div>
        
    );
}
