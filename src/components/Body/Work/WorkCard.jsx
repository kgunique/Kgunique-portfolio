import React from 'react'
import './workcard.css'
const WorkCard = ({ item }) => {
    return (
        <article className="workcard">
            <div className="workcard_top">
                <span className="work_initials" aria-hidden="true">{item.company.slice(0, 1).toUpperCase()}</span>
                <span className="work_type">{item.type}</span>
            </div>
            <div className="workcard_heading">
                <div>
                    <p className="work_title">{item.designation}</p>
                    <h3 className="company_name">{item.company}</h3>
                </div>
                <p className="work_period">{item.period}</p>
            </div>
            <ul className="work_highlights">
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
        </article>
    )
}

export default WorkCard
