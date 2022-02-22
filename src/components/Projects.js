import { useEffect, useState } from "react"

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
            <h1>projects.</h1>
            <div className="project-list-container">
                <ul>
                    {starredProjects.map(project => {
                        return(
                            <li>
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
        </div>
    )
}

export default Projects