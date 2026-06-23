export default function Contact() {
    return (
        <section id="contact" className="mb-10">
            <h1 className="text-2xl text-center text-blue-600 mt-50 mb-10">Let's Connect</h1>
            <p className="text-center text-l mb-5">I'm currently looking for frontend internship opportunities. feel free to reach out, i'd love to talk.</p>
            <div className="flex justify-center gap-2 flex-wrap items-center">
                <a href="mailto:salmank786s@gmail.com" className="inline-block bg-stone-800 hover:bg-stone-900 text-stone-200 px-3 py-2 rounded-md">email me</a>
                 <a target="blank" href="https://github.com/Salman-0090" className="inline-block bg-stone-800 hover:bg-stone-900 text-stone-200 px-3 py-2 rounded-md">github</a>
                  <a target="blank" href="https://www.linkedin.com/in/salmann-khan/" className="inline-block bg-stone-800 hover:bg-stone-900 text-stone-200 px-3 py-2 rounded-md">linkedin</a>
            </div>
        </section>
    )
}   