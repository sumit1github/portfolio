
import 'bootstrap/dist/css/bootstrap.min.css';
import './Professional.css';

const Template = ({ children }) => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="portfolio-bg">
            <div className="tech-grid"></div>

            {/* Navigation */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-tech">
                <div className="container-fluid px-4">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="tech-brand h2 mb-0 fw-bold">
                            &lt;SUMIT_PANDA /&gt;
                        </div>
                        <div className="d-none d-md-flex">
                            {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`nav-tech-button active`}
                                >
                                    {section}.exe
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {children}


            {/* Footer */}
            <footer className="footer-tech">
                <div className="container-fluid text-center">
                    <div className="terminal-text d-inline-block">
                        © 2025 SUMIT_PANDA.exe | Built with React.js && passion for great UX
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Template;