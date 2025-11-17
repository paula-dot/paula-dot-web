export default function Hero() {
    return (
        <section className="py-20 px-6 text-center max-w-4xl mx-auto" id="hero">
            <h1 className="text-4xl font-bold mb-4">
                Hello, I'm <span className="text-blue-400">Paul Akelo</span>
            </h1>

            <p className="text-lg text-gray-300">
                A GIS enthusiast, Software Developer, and Data Scientist.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="px-3 py-1 bg-white/10 rounded-full">GIS</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Software Dev</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Data Science</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">AI/ML</span>
            </div>
        </section>
    );
}
