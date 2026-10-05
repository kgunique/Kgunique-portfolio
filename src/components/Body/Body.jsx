import React from 'react'
import './body.css'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Work from './Work/Work'
import Contact from './Contact/Contact'

const Body = () => {
    return (
        <main className="body">
            <section id="about" aria-labelledby="hero-title">
                <About />
            </section>
            <section id="projects" aria-labelledby="projects-title">
                <Projects />
            </section>
            <section id="experience" aria-labelledby="experience-title">
                <Work />
            </section>
            <section id="skills" aria-labelledby="skills-title">
                <Skills />
            </section>
            <section id="contact" aria-labelledby="contact-title">
                <Contact />
            </section>
        </main>
    )
}

export default Body
