import FadeIn from "react-fade-in/lib/FadeIn"

function Home(){
    return(
        <div className="home-container">
            <FadeIn>
            <h1>welcome.</h1>
            <h3>Please click around using the navigation bar above to learn more about me and my experiences</h3>
            </FadeIn>
        </div>
    )
}

export default Home