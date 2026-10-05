import './webmenu.css';

const Webmenu = ({ activeSection, setActiveSection }) => {
    const links = [
        { href: '#projects', label: 'Selected work', section: 'projects' },
        { href: '#experience', label: 'Experience', section: 'experience' },
        { href: '#skills', label: 'Skills', section: 'skills' },
    ]

    return (
        <div className="webmenucontainer">
            {links.map(({ href, label, section }) => (
                <a
                    href={href}
                    key={section}
                    className={`clay-button clay-button--pill${activeSection === section ? ' is-active' : ''}`}
                    aria-current={activeSection === section ? 'location' : undefined}
                    onClick={() => setActiveSection(section)}
                >
                    {label}
                </a>
            ))}
        </div>
    )
}

export default Webmenu
