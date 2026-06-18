import Image from "next/image"
import Button from "./Button"


export default function Projects() {
    const cards = [
    {
      name: "The Wild Oasis | Cabin Booking App",
      techs: ["React.js", "Next.js 14", "Tailwind CSS", "Supabase"],
      image: "/wildoasis.webP",
      description:
        "A full-stack hotel management application built with Next.js 14. This comprehensive system handles cabin bookings, guest management, and administrative operations with a modern, responsive interface.",
      liveLink: "https://wild-oasis-nextjs-app-uzro.vercel.app/",
      codeLink: "https://github.com/Salman-0090/Wild-oasis-Nextjs-app",
    },
  {
      name: "Finance Tracker",
      techs: ["React.js", "Next.js 14", "Tailwind CSS", "Supabase"],
      image: "/wildoasis.webP",
      description:
        "A full-stack hotel management application built with Next.js 14. This comprehensive system handles cabin bookings, guest management, and administrative operations with a modern, responsive interface.",
      liveLink: "https://wild-oasis-nextjs-app-uzro.vercel.app/",
      codeLink: "https://github.com/Salman-0090/Wild-oasis-Nextjs-app",
    },
{
      name: "Pizza Booking App",
      techs: ["React.js", "Next.js 14", "Tailwind CSS", "Supabase"],
      image: "/wildoasis.webP",
      description:
        "A full-stack hotel management application built with Next.js 14. This comprehensive system handles cabin bookings, guest management, and administrative operations with a modern, responsive interface.",
      liveLink: "https://wild-oasis-nextjs-app-uzro.vercel.app/",
      codeLink: "https://github.com/Salman-0090/Wild-oasis-Nextjs-app",
    },]
    return(
    <section id="projects" className="mt-40 mb-20 ">
        <div className="flex gap-8 flex-wrap justify-center">
          {cards.map((card)=> {
            return (
            <div key={card.name} className="max-w-[300px] max-h-[700px] rounded-md overflow-hidden bg-blue-100 shadow-xl/30 cursor-pointer transition-all duration-300 hover:translate-y-2 hover:shadow-2xl">
                 <Image src={card.image} width={400} height={400} alt={card.name} key={card.name}/>
              
                <div className="flex flex-wrap gap-2 mt-3 px-3">
                    {card.techs.map((tech)=> {
                      return  <span key={tech} className="text-xs text-stone-200 px-2 py-1 bg-stone-600 rounded-md">{tech}</span>
                    })}
                </div>
                <div className="mt-10 ml-4 text-lg font-semibold"> 
                    {card.name}
                </div>
                <div className="text-sm ml-4 mr-4 mt-4"> 
                    {card.description}
                </div>
                <Button variant="primary" className="ml-3">View Project</Button>
                <Button variant="stone" className="ml-3 mb-10">Source Code</Button>
            </div>
                )
          })}
        </div>
    </section>
    )
} 