import { I4G_LOGO, ZURI_LOGO } from "../assets/image";

const Footer = () => {
    return(
        <footer className="home__footer">
            <img src={ZURI_LOGO} alt=""/>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G_LOGO} alt=""/>
        </footer>
    )
}
export default Footer;