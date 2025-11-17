export default function ProjectCard({ title, description, tags }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-900">{title}</h3>

            <p className="text-gray-700 mt-2">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
}
