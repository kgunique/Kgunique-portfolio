import React from 'react'
import Seperator from '../../common/seperator/Seperator'
import { ProjectData } from '../../Data/ProjectData'
import ProData from './ProData'
import './projects.css'
const Projects = () => {
    const MyProjects = ProjectData
    return (
        <div className="projects">
            <h2 className="section_title" id="projects-title">My Projects</h2>
            <br/>
            <div className="project_list">{
                MyProjects.map((project)=>{
                    return(
                        <ProData project={project} key={project.id}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Projects
