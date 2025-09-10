import React from 'react'
import Template from '../Template'
import './ProjectDetails.css'

const projectData = {
    title: "Visvarsaha - Enterprise Resource Planning System",
    description: "A comprehensive ERP solution designed for modern businesses, integrating various modules including HR, Finance, and Operations.",
    longDescription: `Visvarsaha is an advanced Enterprise Resource Planning (ERP) system that revolutionizes how businesses manage their resources and operations. Built with scalability and user experience in mind, it seamlessly integrates multiple business functions into a single, coherent platform.

    The system features real-time analytics, customizable dashboards, and intelligent automation capabilities that help businesses streamline their processes and make data-driven decisions.`,
    technologies: ["React", "Django", "PostgreSQL", "Docker", "AWS"],
    features: [
        "Multi-tenant architecture supporting multiple organizations",
        "Real-time data synchronization across modules",
        "Advanced reporting and analytics dashboard",
        "Role-based access control system",
        "Mobile-responsive interface"
    ],
    images: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg"
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id"
}

export const ProjectDetails = () => {
    return (
        <Template>
            <div className="project-details-container w-100">
                <div className="project-header">
                    <h1>{projectData.title}</h1>
                    <p className="project-description">{projectData.description}</p>
                </div>

                <div className="project-content">
                    <div className="content-section">
                        <div className="image-section">
                            <img src={projectData.images[0]} alt="Project screenshot" />
                        </div>
                        <div className="text-section">
                            <h2>Overview</h2>
                            <p>{projectData.longDescription}</p>
                            <div className="technologies">
                                <h3>Technologies Used</h3>
                                <div className="tech-tags">
                                    {projectData.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="features-section">
                        <h2>Key Features</h2>
                        <ul>
                            {projectData.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="video-section">
                        <h2>Demo Video</h2>
                        <div className="video-container">
                            <iframe
                                src={projectData.videoUrl}
                                title="Project Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
