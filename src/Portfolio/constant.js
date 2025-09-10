export const metaTags = [
    { name: 'description', content: 'Senior Full-Stack Developer with 4+ years experience in Django, React, AWS. Expert in cloud architecture, microservices, and scalable web applications.' },
    { name: 'keywords', content: 'Full-Stack Developer, Django, React, AWS, Cloud Architect, Python, JavaScript, PostgreSQL, Docker, CI/CD' },
    { name: 'author', content: 'Sumit Panda' },
    { property: 'og:title', content: 'Sumit Panda - Senior Full-Stack Developer & Cloud Architect' },
    { property: 'og:description', content: 'Experienced developer specializing in Django, React, and AWS cloud solutions. Building scalable applications for global clients.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sumit Panda - Full-Stack Developer' },
    { name: 'twitter:description', content: 'Senior developer with expertise in Django, React, AWS, and cloud architecture.' }
];

export const skillCategories = [
    {
        icon: "",
        title: "Frontend & UI/UX",
        skills: ["React.js", "HTML5", "CSS3", "JavaScript ES6+", "Bootstrap", "Responsive Design"]
    },
    {
        icon: "",
        title: "Backend & APIs",
        skills: ["Django", "Django REST Framework", "FastAPI", "Flask", "GoLang", "Celery"]
    },
    {
        icon: "",
        title: "Cloud & DevOps",
        skills: ["AWS (20+ Services)", "Docker", "Terraform", "Ansible", "Jenkins", "CI/CD"]
    },
    {
        icon: "",
        title: "Databases & Caching",
        skills: ["PostgreSQL", "Redis", "ElastiCache", "RDS", "Database Optimization"]
    },
    {
        icon: "",
        title: "Testing & Quality",
        skills: ["Postman", "BrowserStack", "Selenium", "Unit Testing", "Automation Testing"]
    },
    {
        icon: "",
        title: "Development Tools",
        skills: ["GitHub", "GitLab", "BitBucket", "AWS CodeCommit", "VS Code", "Docker"]
    }
];


export const experiences = [

    {
        company: "Homegenius Exteriors",
        role: "International softwere Contractor",
        type: "Remote Contract",
        duration: "May 1 – Present",
        description: "Architected and maintained high-performance Django applications with global team collaboration.",
        technologies: ["Django", "DRF", "Redis", "PostgreSQL", "FastAPI", "Docker", "Zope"],
        achievements: [
            "Architected high-performance Django applications",
            "Implemented comprehensive testing strategies",
            "Optimized application performance",
            "Collaborated across multiple time zones"
        ]
    },
    {
        company: "Assiduous Inc – Arbor Green",
        role: "Lead Full-Stack Developer",
        type: "Remote",
        duration: "Nov 2022 – Apr 30, 2025",
        description: "Led end-to-end development of multiple web and mobile applications with microservices architecture.",
        technologies: ["Python", "Django", "Fast API", "ML", "Lang-chain", "Chroma-DB", "APACHE SOLR", "Elastic Search", "React", ".NET", "AWS", "Docker", "Microservices", "Serverless", "CI/CD", "AWS", "3js"],
        achievements: [
            "Dynamic 3D high-voltage substation design tool, with built-in crm.",
            "Created Intermediate application between Shopify and 3rd party logistics.",
            "Product configurator application.",
            "Product catalog RAG application.",
            "CI/CD implementation for python and .net applications.",
            "Provide AWS training to the team.",
            "CODE review.",
            "Converting Monolithic applications into hybrid applications."
        ]
    },
    {
        company: "MicroPyramid Informatics",
        role: "Full-Stack Developer",
        type: "Remote",
        duration: "Sept 2021 - Oct 2022",
        description: "Led end-to-end development of multiple web and mobile applications with microservices architecture.",
        technologies: ["Python", "React", "AWS", "Docker", "Microservices", "Redis", 'Celery', "DRF"],
        achievements: [
            "Implemented Background processing",
            "worked in a team and completed several projects.",
            "Learned about project management.",
            "Implemented Microservices."
        ]
    },
    {
        company: "IGMI",
        role: "Junior developer",
        type: "Remote",
        duration: "Jan 2021 - Sept 2021",
        description: "Continuously expanded my knowledge of Django and related technologies, actively participating in code reviews, and seeking mentorship to improve coding practices and project management skills. Played a key role in facilitating communication between developers and other stakeholders, ensuring that project goals were clearly understood and met.",
        technologies: ["Python", "Django", "Jinja", "S3", "ses"],
        achievements: [
            "Completed my first project using wordpress.",
            "Completed my first Django project, a prisoner dating site.",
            "Integrated payment gateway like -> stripe.",
            "Integrated AWS service s3 and ses.",
            "Deployed in Aws."
        ]
    },

];

export const projects = [
    {
        title: "Zope to Django Migration",
        description: "Migrated legacy Zope-based application to Django without disrupting production, focusing on the Jobs module.",
        technologies: ["AWS S3", "Django", "DRF", "Docker", "PostgreSQL"],
        highlights: ["Zero downtime migration", "Redis URL shortening", "100% test coverage"]
    },
    {
        title: "Product Configurator",
        description: "Upgraded 11-year-old project supporting 9 countries with multilingual product customization.",
        technologies: ["AWS Cognito", "S3", "Bedrock", "React.js", ".NET"],
        highlights: ["9 countries support", "AI image tagging", "Multilingual interface"]
    },
    {
        title: "SummaryAI",
        description: "Real-time meeting transcription and summarization system with WebSocket integration.",
        technologies: ["DRF", "Django Channels", "AWS Lambda", "ChatGPT"],
        highlights: ["Real-time transcription", "WebSocket integration", "Auto summarization"]
    },
    {
        title: "ML Product Recommendation",
        description: "AI-powered recommendation system for hospitals with 82% accuracy.",
        technologies: ["Pandas", "NumPy", "scikit-learn", "FastAPI", "AWS Lambda"],
        highlights: ["82% accuracy", "Serverless deployment", "Protected API"]
    },
    {
        title: "ML Product Recommendation",
        description: "AI-powered recommendation system for hospitals with 82% accuracy.",
        technologies: ["Pandas", "NumPy", "scikit-learn", "FastAPI", "AWS Lambda"],
        highlights: ["82% accuracy", "Serverless deployment", "Protected API"]
    },
    {
        title: "Lucky Money - A Fantasy Game Platform",
        description: "A web application that enables users to play/bet several game slots with virtual currency.",
        technologies: ["Django", "JavaScript", "HTML5", "CSS3", "POSTGRES"],
        highlights: [
            "Instant Wallet Transaction",
            "Transaction Logs for audit.",
            "Instant winning amount credit.",
            "Granular admin reporting.",
            "End TO End Customization."
        ]
    }
];