import React, { useState } from 'react'
import './prodata.css'
import Language from '@material-ui/icons/Language';
import GitHub from '@material-ui/icons/GitHub';
const ProData = ({ project }) => {
    const screenshots = project.images?.length ? project.images : [project.image]
    const [activeScreenshot, setActiveScreenshot] = useState(0)
    const showScreenshot = (offset) => {
        setActiveScreenshot((current) => (current + offset + screenshots.length) % screenshots.length)
    }

    return (
        <article className="prodata">
            <div className={`project_media${project.image ? '' : ` project_media--${project.accent}`}`}>
                {project.image ? (
                    <img
                        src={screenshots[activeScreenshot]}
                        alt={`${project.title} screenshot ${activeScreenshot + 1} of ${screenshots.length}`}
                        className="project_image"
                    />
                ) : (
                    <div className="project_art" aria-hidden="true">
                        <span className="project_art_index">{project.visual}</span>
                        <span className="project_art_name">{project.title}</span>
                        <span className="project_art_category">{project.category}</span>
                        <span className="project_art_orbit" />
                    </div>
                )}
                {screenshots.length > 1 && (
                    <div className="project_slider_controls" aria-label={`${project.title} screenshots`}>
                        <button
                            className="project_slider_arrow clay-button clay-button--icon"
                            type="button"
                            aria-label="Previous screenshot"
                            onClick={() => showScreenshot(-1)}
                        >
                            <span aria-hidden="true">‹</span>
                        </button>
                        <div className="project_slider_dots">
                            {screenshots.map((_, index) => (
                                <button
                                    className={`project_slider_dot${index === activeScreenshot ? ' is-active' : ''}`}
                                    type="button"
                                    key={`${project.id}-screenshot-${index}`}
                                    aria-label={`Show screenshot ${index + 1}`}
                                    aria-pressed={index === activeScreenshot}
                                    onClick={() => setActiveScreenshot(index)}
                                />
                            ))}
                        </div>
                        <button
                            className="project_slider_arrow clay-button clay-button--icon"
                            type="button"
                            aria-label="Next screenshot"
                            onClick={() => showScreenshot(1)}
                        >
                            <span aria-hidden="true">›</span>
                        </button>
                    </div>
                )}
            </div>
            <div className="project_info">
                <p className="project_kicker">{project.category}</p>
                <h3 className="project_title">{project.title}</h3>
                <p className="project_description">{project.description}</p>
                <div className="project_tags" aria-label="Technologies">
                    {project.tags.map((tag) => <span className="project_tag" key={tag}>{tag}</span>)}
                </div>
                <ul className="project_highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="project_links">
                    {project.demo && <a className="project_link project_link_primary clay-button clay-button--primary" href={project.demo} target="_blank" rel="noopener noreferrer">Visit website <Language aria-hidden="true" /></a>}
                    {project.github && <a className="project_link project_link_secondary clay-button" href={project.github} target="_blank" rel="noopener noreferrer">Source code <GitHub aria-hidden="true" /></a>}
                </div>
            </div>
        </article>
    )
}

export default ProData
