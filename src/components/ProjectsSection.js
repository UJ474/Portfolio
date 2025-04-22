import { useEffect, useRef, useState } from 'react';
import '../css_files/projectssection.css'
import projects from '../Assets/data/projects';
// import image from '../Assets';



export default function ProjectsSection() {
    const projectRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const checkinview = projectRef.current;
    
        const observer = new IntersectionObserver(
                    // IntersectionObserver is a browser API that watches an element and tells you when it enters or exits the viewport (your screen).
                    // two arguments ====> first => A callback function – runs when the element intersects
                    // second => An options object – allows you to specify the threshold at which the callback is triggered
            ([entry]) => {
                setInView(entry.isIntersecting);
            }
        );
    
        if (checkinview) observer.observe(checkinview);
    
        return () => {
            if (checkinview) observer.unobserve(checkinview);
        };          // clean up function, runs when the component unmounts or before useEffect runs again
    
    }, []);

    return (
        <div className="projectscontainer" ref={projectRef}>
            <h1 className={`projectsheading ${inView ? 'animate-typing' : ''}`}>
                <span>My Projects</span>
            </h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.description}/>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>

        </div>
    );
}
