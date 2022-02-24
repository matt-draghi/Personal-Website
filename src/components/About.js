import photo from "../assets/AE0483E6-43E0-4602-8653-74C064B79661.jpeg"
import FadeIn from "react-fade-in/lib/FadeIn"

function About(){
    return(
        <div className="about-container">
            <FadeIn>
                <h1>about.</h1>
                {/* TODO: add 30 second pitch */}
                <p>
                    Hi, my name is Matt Draghi, and I am a software engineering student at Flatiron School! 
                    Prior to my time at Flatiron I worked at Grant Thornton LLP for a year and a half as a member of their cyber risk team. 
                    Before entering the consulting space I graduated from Penn State University's College of Information Sciences and Technology, where I received a degree in cyber security, as well as in application design & development.
                    </p>
                <img src={photo} alt="Rudy on the lion"/>
                <p>
                    I am currently looking to utilize my knowledge of JavaScript and React to help innovate in the tech community. 

                </p>
            </FadeIn>
        </div>
    )
}

export default About