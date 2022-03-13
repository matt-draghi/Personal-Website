import FadeIn from "react-fade-in/lib/FadeIn"

function Home(){
    return(
        <div className="home-container">
            <FadeIn>
            <h2>welcome</h2>
            <h3>Please click around using the navigation bar above to learn more about me and my experiences</h3>

            {/* TODO: add key projects here (baby and dotify (front and back)) */}
                <div className="project-card-container">
                    {/* <ProjectCard 
                        name={}
                        description={}
                        img={}
                        video_url={}
                    /> */}

                </div>
            </FadeIn>
        </div>
    )
}

export default Home