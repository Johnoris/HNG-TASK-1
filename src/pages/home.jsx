import { Link } from "react-router-dom";
import { GITHUB_LOGO, PROFILE_IMG, SHARE_ICON, SLACK_LOGO } from "../assets/image";
import Footer from "../components/footer";

const Home = () => {
    return(
        <div className="home">
            <div className="home__profile-img">
                <img className="home__profile-img__share" src={SHARE_ICON} alt=""/>
                <img id="profile__img" src={PROFILE_IMG} alt=""/>
                <h4 id="twitter">1_black_kid_</h4>
                {/* <h4 id="slack">John Orisanwo</h4> */}
            </div>
            <main className="home__main">
                <a href="https://twitter.com/1_black_kid_">Twitter Link</a>
                <a id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
                <a id="books" href="http://books.zuri.team">Zuri Books</a>
                <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=johnorisanwo">Python Books</a>
                <a id="pitch" href="https://background.zuri.team">Background Check for Coders</a>
                <a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>
                <Link to='/contact' id="contact">Contact Me</Link>
            </main>
            <div className="home__socials">
                <img src={SLACK_LOGO} alt=""/>
                <img src={GITHUB_LOGO} alt=""/>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;