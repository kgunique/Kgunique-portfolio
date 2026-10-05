import React from 'react'
import './work.css'
import {WorkDT} from '../../Data/WorkDT'
import WorkCard from './WorkCard'

const Work = () => {
    const WD = WorkDT;
    return (
        <div className="work">
            <div className="section_heading">
                <p className="section_eyebrow">Where I&apos;ve contributed</p>
                <h2 id="experience-title">Experience</h2>
                <p className="section_intro">Frontend engineering, product delivery, and team collaboration across enterprise and public-sector platforms.</p>
            </div>
            <div className="work_list">
              {
                  WD.map((item)=>{
                        return(
                            <WorkCard item={item} key={item.id} />
                        )
                  })
              }
            </div>
            <div className="career_highlights">
                <article className="career_highlight">
                    <p className="section_eyebrow">Recognition</p>
                    <h3>Codebucket Vibe-a-thon</h3>
                    <p>Recognized for completing development tasks efficiently using Generative AI tools during the internal AI-driven coding hackathon.</p>
                </article>
                <article className="career_highlight">
                    <p className="section_eyebrow">Education</p>
                    <h3>Bachelor of Computer Applications</h3>
                    <p>Indira Gandhi National Open University (IGNOU) <span>2014–2017 · CGPA 7.6</span></p>
                </article>
            </div>
        </div>
    )
}

export default Work
