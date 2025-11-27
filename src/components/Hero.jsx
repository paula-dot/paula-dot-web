export default function Hero() {
    return (
        <section className="py-20 px-6 text-center max-w-4xl mx-auto" id="hero">
            <h1 className="text-4xl font-bold mb-4">
                Hello, I'm <span className="text-blue-400">Paul Akelo</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                GIS Analyst & Software Engineer crafting interactive maps, spatial data pipelines,
                and 3D geospatial visuals for real-world decisions.
            </p>

            <div className="flex justify-center gap-3 mt-6">
                <a href="#projects" className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">View Projects</a>
                <a href="/contact" className="px-5 py-2 rounded border border-white/30 hover:bg-white/10 text-white">Contact Me</a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6 text-sm text-gray-300">
                <span className="px-3 py-1 bg-white/10 rounded-full">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Spatial Analysis</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">PostGIS</span>
            </div>
        </section>
    );
}
