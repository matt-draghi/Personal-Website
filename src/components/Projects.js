import { useEffect, useState } from "react"
import FadeIn from "react-fade-in/lib/FadeIn"

function Projects(){

    const user= 'matt-draghi'
    const [starredProjects, setStarredProjects] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/starred`)
        .then(resp => (resp.json()))
        .then((starred) => {
            setStarredProjects(starred)
        })
    },[])

    return(
        <div>
            <FadeIn>
            <h1>projects.</h1>
            <h3>Checkout some of the things I have done so far - follow these links to my GitHub pages</h3>
            <div className="project-list-container">
                {/* TODO: ADD PROJECTS MANUALLY AND CREATE PROJECT CARDS */}
            </div>
            </FadeIn>
        </div>
    )
}

export default Projects