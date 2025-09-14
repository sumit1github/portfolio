import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router";
import Template from '../Template';
import './ProjectDetails.css';

import { projects } from "../constant";

export const ProjectDetails = () => {
    const { project_id } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProject = projects.find(p => p.id === Number(project_id));
        setProject(foundProject || null);
    }, [project_id]);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <Template>
            <div className="project-details-container w-100">
                <button
                    onClick={() => navigate('/')}
                    className="back-button"
                    aria-label="Back to home"
                >
                    ←
                </button>
                <div className="project-header">
                    <h1>{project?.title}</h1>
                    <p className="project-description">{project?.description}</p>
                </div>

                <div className="project-content">
                    {project?.overview?.map((overview_item, index) => (
                        <div className="content-section" key={index}>
                            {index % 2 === 0 ? (
                                <>

                                    <div className="image-section">
                                        {overview_item?.image?.map((image, index) => (
                                            <img style={{ marginTop: "1rem" }} src={image} alt={overview_item.text} />
                                        ))}
                                    </div>

                                    <div className="text-section">
                                        <p>{overview_item.text}</p>
                                        <div className="technologies">
                                            <h3>Features</h3>
                                            <div className="tech-tags">
                                                {overview_item.keywords?.map((keyword, keywordIndex) => (
                                                    <span key={keywordIndex} className="tech-tag">
                                                        {keyword.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-section">
                                        <p>{overview_item.text}</p>
                                        <div className="technologies">
                                            <h3>Features</h3>
                                            <div className="tech-tags">
                                                {overview_item.keywords?.map((keyword, keywordIndex) => (
                                                    <span key={keywordIndex} className="tech-tag">
                                                        {keyword.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-section">
                                        <img src={overview_item?.image} alt={overview_item.text} />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {project?.yt_url && (
                    <div className="video-section mt-5">
                        <h2 className="text-center mb-4">Project Demo</h2>
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="600"
                                src={project.yt_url}
                                title="Project Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </Template>
    )
}
