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
                <ul>
                    {starredProjects.map(project => {
                        return(
                            <li className="project-item">
                                <a href={`https://github.com/matt-draghi/${project.name}/tree/main`} target="_blank">
                                    {project.name}
                                </a>
                                {/* TODO: add project card component back and create list item there maybe? 
                                include project details and screenshot perhaps??? May need to change from ul to component like cards*/}
                            </li>
                        )
                        })}
                </ul>
            </div>
            </FadeIn>
        </div>
    )
}

export default Projects