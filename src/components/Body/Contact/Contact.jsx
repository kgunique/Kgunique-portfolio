import React from 'react'
import './contact.css'
import Social from '../../common/socialcontact/Social'
import ArrowForward from '@material-ui/icons/ArrowForward';
import Email from '@material-ui/icons/Email';
import resume from '../../../asset/kkcv.pdf';
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_card">
                <div className="contact_copy">
                    <p className="section_eyebrow">Have a good fit in mind?</p>
                    <h2 id="contact-title">Let&apos;s build something meaningful.</h2>
                    <p className="contact_description">Have a project in mind? I&apos;m available to discuss product engineering, frontend architecture, or a new opportunity.</p>
                </div>
                <div className="contact_actions">
                    <a className="contact_resume clay-button" href="mailto:96karankkr@gmail.com">
                        <Email aria-hidden="true" /> 96karankkr@gmail.com
                    </a>
                    <a className="contact_resume clay-button" download href={resume}>
                        Download resume <ArrowForward aria-hidden="true" />
                    </a>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Contact
