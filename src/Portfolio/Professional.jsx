import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Code, Server, Cloud, Database, TestTube, Wrench } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Professional.css';
import { metaTags, skillCategories, experiences, projects } from "./constant";
import Template from './Template';

const Professional = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState({});

    // SEO Meta tags effect
    useEffect(() => {
        document.title = "Sumit Panda - Senior Full-Stack Developer & Cloud Architect";

        metaTags.forEach(tag => {
            let element = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
            if (!element) {
                element = document.createElement('meta');
                if (tag.name) element.setAttribute('name', tag.name);
                if (tag.property) element.setAttribute('property', tag.property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', tag.content);
        });

        // Structured data for SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sumit Panda",
            "jobTitle": "Senior Full-Stack Developer & Cloud Architect",
            "email": "sumit1panda@gmail.com",
            "telephone": "+91-8617811488",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bankura",
                "addressRegion": "West Bengal",
                "postalCode": "722101",
                "addressCountry": "IN"
            },
            "alumniOf": "Lovely Professional University",
            "knowsAbout": ["Django", "React", "AWS", "Python", "JavaScript", "Cloud Architecture", "DevOps", "PostgreSQL"]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);




    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <Template>
            {/* Hero Section */}
            <section id="hero" className="hero-tech full-width-section d-flex align-items-center justify-content-center position-relative">
                <div className="container-fluid text-center position-relative" style={{ zIndex: 10 }}>
                    <div className={`fade-in-tech ${isVisible.hero ? 'visible' : ''}`}>
                        <h1 className="hero-tech-title mb-4">
                            SUMIT_PANDA
                        </h1>
                        <div className="terminal-text mx-auto mb-5" style={{ maxWidth: '800px' }}>
                            <div>System.out.println("Senior Full-Stack Developer & Cloud Architect");</div>
                            <div className="mt-2">// Initializing 4+ years of scalable web development...</div>
                            <div>// Loading expertise: Django | React | AWS | DevOps</div>
                            <div className="text-warning">STATUS: Ready for new challenges</div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
                            <a href="mailto:sumit1panda@gmail.com" className="btn btn-tech">
                                <Mail size={16} className="me-2" />
                                EXECUTE_CONTACT()
                            </a>
                            <a href="#projects" onClick={() => scrollToSection('projects')} className="btn btn-tech">
                                <ExternalLink size={16} className="me-2" />
                                VIEW_PROJECTS()
                            </a>
                        </div>
                    </div>
                </div>
            </section>            {/* About Section */}
            <section id="about" className="tech-section section-dark-tech full-width-section">
                <div className="container-fluid px-4">
                    <div className={`fade-in-tech ${isVisible.about ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <h2 className="tech-heading display-4 fw-bold text-center mb-5">
                            $ cat about_me.json
                        </h2>
                        <div className="row align-items-center gy-5">
                            <div className="col-lg-6">
                                <div className="code-block">
                                    <pre>{`{
                                        "role": "Senior Full-Stack Developer",
                                        "experience": "4+ years",
                                        "specialization": [
                                            "Legacy System Migration",
                                            "CI/CD Pipeline Implementation", 
                                            "High-Performance Applications"
                                        ],
                                        "expertise": {
                                            "frontend": ["React.js", "JavaScript ES6+"],
                                            "backend": ["Django", "FastAPI", "GoLang"],
                                            "cloud": ["AWS (20+ Services)", "Docker"],
                                            "devops": ["Terraform", "Ansible", "Jenkins"]
                                        },
                                        "mission": "Delivering end-to-end solutions that meet complex business requirements"
                                        }`}</pre>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tech-card mb-4">
                                    <h4 className="text-warning mb-3">
                                        <Server size={24} className="me-2" />
                                        EDUCATION.CONFIG
                                    </h4>
                                    <div className="terminal-text">
                                        <strong>B.Tech Computer Science & Engineering</strong><br />
                                        Lovely Professional University (2021)<br />
                                        <span className="text-success">STATUS: COMPLETED</span>
                                    </div>
                                </div>
                                <div className="tech-card">
                                    <h4 className="text-warning mb-3">
                                        <MapPin size={24} className="me-2" />
                                        CONTACT.ENV
                                    </h4>
                                    <div className="terminal-text">
                                        <div className="d-flex align-items-center mb-2">
                                            <Mail size={16} className="me-2 text-info" />
                                            <span>sumit1panda@gmail.com</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <Phone size={16} className="me-2 text-info" />
                                            <span>+91-8617811488</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <MapPin size={16} className="me-2 text-info" />
                                            <span>Bankura, West Bengal, 722101</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="tech-section full-width-section">
                <div className="container-fluid px-4">
                    <div className={`fade-in-tech ${isVisible.skills ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                        <h2 className="tech-heading display-4 fw-bold text-center mb-5">
                            $ ls -la skills/
                        </h2>
                        <div className="row g-4">
                            {skillCategories.map((category, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="tech-card h-100">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="text-info me-3 pulse-animation">
                                                {category.icon}
                                            </div>
                                            <h3 className="h5 mb-0 text-warning text-uppercase">
                                                {category.title.replace(/[&\s]/g, '_')}
                                            </h3>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="skill-tag-tech">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="tech-section section-dark-tech full-width-section">
                <div className="container-fluid px-4">
                    <div className={`fade-in-tech ${isVisible.experience ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                        <h2 className="tech-heading display-4 fw-bold text-center mb-5">
                            $ git log --oneline experience
                        </h2>
                        <div className="row g-4">
                            {experiences.map((exp, index) => (
                                <div key={index} className="col-12">
                                    <div className="tech-card">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="terminal-text mb-4 mb-lg-0">
                                                    <div className="text-warning h4 mb-2">
                                                        [{exp.company.replace(/\s/g, '_').toUpperCase()}]
                                                    </div>
                                                    <div className="text-info h5 mb-2">
                                                        ROLE: {exp.role}
                                                    </div>
                                                    <div className="text-secondary">
                                                        TYPE: {exp.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="code-block mb-3">
                                                    <div className="text-success">// Project Description</div>
                                                    <div>{exp.description}</div>
                                                </div>
                                                <div className="mb-3">
                                                    <h5 className="text-warning mb-3">ACHIEVEMENTS[]:</h5>
                                                    <ul className="list-unstyled">
                                                        {exp.achievements.map((achievement, i) => (
                                                            <li key={i} className="text-light d-flex align-items-start mb-2">
                                                                <span className="text-success me-2">✓</span>
                                                                <span className="small">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="d-flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, i) => (
                                                        <span key={i} className="skill-tag-tech tech-tag-purple">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="tech-section full-width-section">
                <div className="container-fluid px-4">
                    <div className={`fade-in-tech ${isVisible.projects ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
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

            {/* Contact Section */}
            <section id="contact" className="tech-section section-dark-tech full-width-section">
                <div className="container-fluid px-4">
                    <div className={`fade-in-tech ${isVisible.contact ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
                        <h2 className="tech-heading display-4 fw-bold text-center mb-5">
                            $ ./initiate_connection.sh
                        </h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="tech-card h-100">
                                            <h3 className="text-warning mb-4">COMMUNICATION_CHANNELS:</h3>
                                            <div className="terminal-text mb-4">
                                                I'm always interested in discussing new opportunities, innovative projects,
                                                and collaborations. Whether you're looking for a dedicated developer or
                                                need consultation on your next big idea, let's connect!
                                            </div>
                                            <div className="code-block">
                                                <div className="d-flex align-items-center mb-3">
                                                    <Mail className="text-info me-3" size={24} />
                                                    <a href="mailto:sumit1panda@gmail.com" className="text-light text-decoration-none">
                                                        sumit1panda@gmail.com
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <Phone className="text-info me-3" size={24} />
                                                    <a href="tel:+918617811488" className="text-light text-decoration-none">
                                                        +91-8617811488
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <MapPin className="text-info me-3" size={24} />
                                                    <span className="text-light">Bankura, West Bengal, India</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tech-card h-100">
                                            <h3 className="text-warning mb-4">SOCIAL_LINKS:</h3>
                                            <div className="code-block mb-4">
                                                <a href="#" className="d-flex align-items-center text-light text-decoration-none mb-3">
                                                    <Github size={20} className="me-3 text-info" />
                                                    <span>github.com/sumit_panda</span>
                                                </a>
                                                <a href="#" className="d-flex align-items-center text-light text-decoration-none mb-3">
                                                    <Linkedin size={20} className="me-3 text-info" />
                                                    <span>linkedin.com/in/sumit-panda</span>
                                                </a>
                                                <a href="#" className="d-flex align-items-center text-light text-decoration-none">
                                                    <ExternalLink size={20} className="me-3 text-info" />
                                                    <span>portfolio.sumitpanda.dev</span>
                                                </a>
                                            </div>
                                            <div className="terminal-text">
                                                <h4 className="text-warning mb-3">LANGUAGES:</h4>
                                                <div className="d-flex flex-wrap gap-2">
                                                    {['English', 'Hindi', 'Bengali'].map((lang) => (
                                                        <span key={lang} className="skill-tag-tech tech-tag-purple">
                                                            {lang}_FLUENT
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Template>

    );
};

export default Professional;