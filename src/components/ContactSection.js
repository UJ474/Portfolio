import '../css_files/contactsection.css'

export default function ContactSection() {
    return (
        <>
            <div className="contactsection">
                <h1>
                    <span>Get in Touch</span>
                </h1>
                <div className="contact-background">
                    <div className="contactformbox">
                        <form className="contactform">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your message" rows="4"></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
