import { FaGithub,  FaLinkedin, FaMedium, FaTwitter} from "react-icons/fa";
import FadeIn from "react-fade-in/lib/FadeIn";

function Social(){
    return(
        <div className="social-container">
            <FadeIn>
            <h2>social</h2>
            <h3>Follow me at any of these social accounts</h3>
            <div className="icons-container">
                
                {/* add icons with links to linkedin, github, twitter??? */}
                <a href="https://github.com/matt-draghi" target="_blank"><FaGithub className="icon" style={{color:"#161B22"}}/></a>
                <a href="https://www.linkedin.com/in/draghim/" target="_blank"><FaLinkedin className="icon"style={{color:"#0B65C2"}}/></a>
                <a href="https://medium.com/@mtd5264" target="_blank"><FaMedium className="icon"style={{color:"black"}}/></a>
                <a href="https://twitter.com/MattDraghi" target="_blank"><FaTwitter className="icon"style={{color:"#188CD8"}}/></a>
            </div>
            </FadeIn>
        </div>
    )
}

export default Social