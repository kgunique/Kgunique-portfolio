import React from 'react'
import './mobilemenu.css'
const Mobilemenu = ({isOpen, setIsOpen, activeSection, setActiveSection}) => {
    const links = [
        { href: '#projects', label: 'Selected work', section: 'projects' },
        { href: '#experience', label: 'Experience', section: 'experience' },
        { href: '#skills', label: 'Skills', section: 'skills' },
        { href: '#contact', label: 'Contact', section: 'contact' },
    ]

    return (
        <nav className="mobilemenucontainer" id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen}>
            {links.map(({ href, label, section }) => (
                <a
                    href={href}
                    key={section}
                    className={`clay-button${activeSection === section ? ' is-active' : ''}`}
                    aria-current={activeSection === section ? 'location' : undefined}
                    onClick={() => {
                        setActiveSection(section)
                        setIsOpen(false)
                    }}
                >
                    {label}
                </a>
            ))}
        </nav>
    )
}

export default Mobilemenu
