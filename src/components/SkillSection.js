import { useEffect, useRef, useState } from 'react';
import '../css_files/skillsection.css'

export default function SkillSection() {
    const skillRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = skillRef.current;
    
        const observer = new IntersectionObserver(
        
                    // IntersectionObserver is a browser API that watches an element and tells you when it enters or exits the viewport (your screen).
                    // two arguments ====> first => A callback function – runs when the element intersects
                    // second => An options object – allows you to specify the threshold at which the callback is triggered
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );
    
        if (node) observer.observe(node);
    
        return () => {
            if (node) observer.unobserve(node);
        };          // clean up function, runs when the component unmounts or before useEffect runs again
    }, []);

    return (
        <div className="skillcontainer" ref={skillRef}>
            <h1 className={`skillheading ${inView ? 'animate-typing' : ''}`}>
                <span>My Skills</span>
            </h1>
        </div>
    );
}