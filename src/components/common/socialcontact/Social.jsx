import React from 'react'
import { SocialIcon } from '../../Data/SocialIcon'
import './social.css'
const Social = () => {
    const data = SocialIcon.filter((social) => ['github', 'linkedin'].includes(social.plateform.toLowerCase()));
    return (
        <div className="social_contact">
            {
                data.map((cur)=>{
                    return(
                        <a className="clay-button clay-button--icon" href={cur.link} key={cur.id} aria-label={cur.plateform} target="_blank" rel="noreferrer">
                            <div className="social_container">
                                <img src={cur.icon} alt="" className="socialicon"/>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Social
