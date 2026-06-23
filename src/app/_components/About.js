import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="mt-50 mb-20 ">
            <h1 className="text-blue-600 text-center text-2xl mb-20">About Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center place-items-center gap-10 sm:gap-5">
                <div className="w-40 h-40 rounded-full overflow-hidden mt-10 border-4 border-blue-600"> 
                <Image src="/salman.webp" alt="profile image" width={160} height={160} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-5">Hi, I'm Salman</h2>
                    <p className="text-stone-700">
                       <span className="block mb-5"> I'm a frontend developer who builds clean, functional web apps with <span className="text-blue-600">React</span> and <span className="text-blue-600">Next.js</span>. I taught myself web development by building real, working products instead of just following tutorials — including a full-stack Finance Tracker and a Pizza Delivery app.</span>
                       <span>
I care about writing code that's easy to read and UI that feels effortless to use. I'm currently looking for a frontend internship where I can keep building and learning from a real team.</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 items-center text-stone-700">
                        <p className="px-3 py-2 bg-stone-600 text-stone-200 rounded-md">2 Projects Shipped</p>
                          <p className="px-3 py-2 bg-stone-600 text-stone-200 rounded-md">Self Taught</p>
                            <p className="px-3 py-2 bg-stone-600 text-stone-200 rounded-md">Open to internships</p>
                    </div>
                </div>
            </div>
        </section>
    )
}