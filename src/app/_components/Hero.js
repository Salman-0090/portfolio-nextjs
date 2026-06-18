import Image from "next/image";
import Button from "./Button";

export default function Hero() {
    return (
        <section id="home" className="mt-10 sm:mt-20 sm:flex sm:flex-row sm:items-center sm:justify-around sm:gap-4 flex flex-col items-center justify-center" >
            <div>
            <h1 className="text-3xl text-stone-700">
               <span className="mr-2">Hi, I'm</span>
               <span className="text-blue-600">Salman</span> <br />
               <span>Frontend Developer</span>
            </h1>
            <p className="mt-4 text-stone-500">
                <span className="sm:block">Self-taught developer passionate about building clean, functional,</span>
                 <span>and user-friendly web experiences.</span>
            </p>
            <div className="flex">
            <Button>View Projects</Button>
            <Button variant="primary">Download CV</Button>
            </div>
            </div>
            
            <div className="w-40 h-40 rounded-full overflow-hidden mt-10 border-4 border-white "> 
                <Image src="/salman.webp" alt="profile image" width={160} height={160} className="w-full h-full object-cover" />
            </div>
        </section>
    )
}