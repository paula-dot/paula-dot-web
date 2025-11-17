export default function Skills({ data }) {
    return (
        <section className="py-12 px-6 max-w-5xl mx-auto" id="skills">
            <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(data).map(([category, skills]) => (
                    <div key={category} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-semibold mb-4">{category}</h3>

                        <ul className="space-y-2">
                            {skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="px-3 py-1 bg-white/10 rounded-lg text-sm"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}