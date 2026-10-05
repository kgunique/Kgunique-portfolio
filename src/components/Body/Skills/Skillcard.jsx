import React from 'react'
import './skillcard.css'
const Skillcard = ({skillcard}) => {
    return (
        <div className="skillcard" title={skillcard.name}>
            {skillcard.icon && <span className="skillicon" aria-hidden="true">{skillcard.icon}</span>}
            <span className="skillname">{skillcard.name.trim()}</span>
        </div>
    )
}

export default Skillcard
