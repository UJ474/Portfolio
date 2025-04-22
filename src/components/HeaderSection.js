import '../css_files/headersection.css'



export default function Header() {
    const navheadings = ['About', 'Skills', 'Projects', 'Contact Me']
    return (
        <>
            <div className="Header section"> 
                <div className="nav-bar">
                {navheadings.map((heading) => {
                    return (<div class="nav-bar-headings">{heading}</div>)
                })}
                </div>
            </div>
        </>
    )
}