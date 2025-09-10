import { projects } from "../Portfolio/constant";

export const ProjectListComponent = () => {
    return (
        <section id="projects" className="tech-section full-width-section">
            <div className="container-fluid px-4">
                <div className={`fade-in-tech visible}`} style={{ transitionDelay: '0.8s' }}>
                    <h2 className="tech-heading display-4 fw-bold text-center mb-5">
                        $ cat projects/*.md
                    </h2>
                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div key={index} className="col-lg-6">
                                <div className="tech-card h-100">
                                    <div className="terminal-text mb-4">
                                        <div className="text-warning h4 mb-3">
                                            PROJECT: {project.title.replace(/\s/g, '_').toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="code-block mb-4">
                                        <div className="text-success">// Description</div>
                                        <div className="text-light">{project.description}</div>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="text-warning mb-3">FEATURES[]:</h4>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            {project.highlights.map((highlight, i) => (
                                                <span key={i} className="skill-tag-tech tech-tag-green">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-info mb-3">STACK:</h5>
                                        <div className="d-flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="skill-tag-tech">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
