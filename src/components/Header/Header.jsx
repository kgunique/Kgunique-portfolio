import React, { useEffect, useRef, useState } from 'react'
import './header.css';
import Mobilemenu from './Mobilemenu/Mobilemenu';
import Webmenu from './Webmenu/Webmenu';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import profileImage from '../../asset/profile.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1))
    const menuButtonRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!isOpen) return undefined

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
                menuButtonRef.current.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    return (
        <header className={`header${isScrolled ? ' is-scrolled' : ''}`}>
            <a className="logo" href="#about" aria-label="Karan Kumar, home">
                <img className="logo_img" src={profileImage} alt="" />
                <span>KK<span className="logo_dot">.</span></span>
            </a>
            <nav className="desktop_nav" aria-label="Main navigation">
                <Webmenu activeSection={activeSection} setActiveSection={setActiveSection} />
            </nav>
            <a className="header_contact clay-button clay-button--pill" href="#contact" onClick={() => setActiveSection('contact')}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
            <button
                ref={menuButtonRef}
                className="menu_toggle clay-button clay-button--icon"
                type="button"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <Close /> : <Menu />}
            </button>
            <Mobilemenu
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
        </header>
    )
}

export default Header
