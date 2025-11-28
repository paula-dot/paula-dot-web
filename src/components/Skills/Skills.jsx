import './Skills.css'

export default function Skills({ data }) {
    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-title">My Skills</h2>

            <div className="skills-grid">
                {Object.entries(data).map(([category, skills]) => (
                    <div key={category} className="skills-card">
                        <h3 className="skills-card-title">{category}</h3>

                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="skills-list-item"
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