import Footer from "../components/footer"
import {useNavigate} from 'react-router-dom'

const Contact = () => {
    const router = useNavigate();
    return(
        <div className="contact">
            <div className="contact__main">
                <h2>Contact Me</h2>
                <h4>Hi there, contact me to ask me about anything you have in mind.</h4>
                <form className="contact__main__form">
                    <div className="contact__main__form__first-name">
                        <label htmlFor="first_name">First name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            id="first_name"
                        />
                    </div>
                    <div className="contact__main__form__last-name">
                        <label htmlFor="last_name">Last name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            id="last_name"
                        />
                    </div>
                    <div className="contact__main__form__email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="yourname@email.com"
                            id="email"
                        />
                    </div>
                    <div className="contact__main__form__message">
                        <label htmlFor="message">Message</label>
                        <textarea
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                            id="message"
                        >
                        </textarea>
                    </div>
                    <div className="contact__main__form__consent">
                        <input
                            type="checkbox"
                        />
                        <p>You agree to providing your data to John who may contact you.</p>
                    </div>
                    <button id="btn_submit" onClick={(e) => { e.preventDefault(); router('/')}}>Send message</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;