import React, { useEffect, useState } from 'react'
import Social from '../../common/socialcontact/Social'
import './about.css'
import resume from '../../../asset/kkcv.pdf';

const headlinePhrases = [
    "Hi, I'm Karan Kumar.",
    "I'm a Full-Stack Engineer.",
    "Let's build something remarkable.",
]

const engineeringSlides = [
    {
        eyebrow: '01 / Wireframe to UI',
        title: 'Wireframes into polished UI.',
        description: 'Turn rough ideas into polished, responsive interfaces people enjoy using.',
        code: '<StayCheckout trip={trip} onConfirm={reserve} />',
        symbol: '▤',
        accent: 'violet',
        footer: 'Thoughtful frontend craft',
    },
    {
        eyebrow: '02 / Backend',
        title: 'Reliable systems behind the UI.',
        description: 'Build APIs and data flows that keep the whole product connected.',
        code: 'await bookingService.reserve({ guestId, stayId });',
        symbol: '{ }',
        accent: 'coral',
        footer: 'Practical backend thinking',
    },
    {
        eyebrow: '03 / Vibe coding',
        title: 'Explore ideas through vibe coding.',
        description: 'Use AI-assisted workflows to prototype, iterate, and turn concepts into working experiences.',
        code: 'const draft = await copilot.build(prompt);',
        symbol: '{ }',
        accent: 'blue',
        footer: 'Curiosity meets execution',
    },
    {
        eyebrow: '04 / Security',
        title: 'Build with security in mind.',
        description: 'Treat safer defaults, careful data handling, and secure flows as part of the craft.',
        code: 'if (!session.can("reserve")) throw Forbidden;',
        symbol: '⌑',
        accent: 'mint',
        footer: 'Trust is a feature',
    },
    {
        eyebrow: '05 / AI knowledge',
        title: 'Make AI useful for people.',
        description: 'Apply AI tools and emerging capabilities thoughtfully, where they create real user value.',
        code: 'const insights = await ai.summarize(anonymize(feedback));',
        symbol: '✳',
        accent: 'gold',
        footer: 'Human-centered AI',
    },
]

const About = () => {
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [typedHeadline, setTypedHeadline] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    useEffect(() => {
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            setTypedHeadline(headlinePhrases[0])
            return undefined
        }

        const phrase = headlinePhrases[phraseIndex]
        const isPhraseComplete = typedHeadline === phrase
        const isPhraseEmpty = typedHeadline.length === 0
        const delay = isPhraseComplete && !isDeleting ? 1500 : isPhraseEmpty && isDeleting ? 350 : isDeleting ? 35 : 75
        const timeout = window.setTimeout(() => {
            if (isPhraseComplete && !isDeleting) {
                setIsDeleting(true)
            } else if (isDeleting && isPhraseEmpty) {
                setIsDeleting(false)
                setPhraseIndex((currentIndex) => (currentIndex + 1) % headlinePhrases.length)
            } else {
                setTypedHeadline((currentText) => (
                    isDeleting
                        ? currentText.slice(0, -1)
                        : phrase.slice(0, currentText.length + 1)
                ))
            }
        }, delay)

        return () => window.clearTimeout(timeout)
    }, [isDeleting, phraseIndex, typedHeadline])

    useEffect(() => {
        if (prefersReducedMotion) return undefined

        const interval = window.setInterval(() => {
            setActiveSlide((currentSlide) => (currentSlide + 1) % engineeringSlides.length)
        }, 3000)

        return () => window.clearInterval(interval)
    }, [prefersReducedMotion])

    return (
        <div className="about">
            <div className="hero_copy">
                <p className="hero_eyebrow"><span className="eyebrow_dot" />Software Engineer <span aria-hidden="true">·</span> SDE II</p>
                <h1 id="hero-title" aria-label="Hi, I'm Karan Kumar, a Full-Stack Engineer.">
                    <span className="typewriter_text" aria-hidden="true">{typedHeadline}<span className="typewriter_cursor" /></span>
                </h1>
                <p className="hero_summary">
                    Frontend-focused Software Engineer with 6+ years of experience building scalable, production-grade applications with React.js, TypeScript, and Next.js.
                </p>
                <div className="hero_actions">
                    <a className="button button_primary clay-button clay-button--primary" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
                    <a className="button button_secondary clay-button" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
                    <a className="button button_secondary clay-button" href={resume} download>Download resume <span aria-hidden="true">↓</span></a>
                </div>
                <div className="hero_socials">
                    <span>Find me on</span>
                    <Social />
                </div>
            </div>
            <div className="hero_visual">
                <div className="hero_visual_glow" />
                <div className="hero_orbit" aria-hidden="true">
                    <span className="orbit_ring orbit_ring--outer" />
                    <span className="orbit_ring orbit_ring--inner" />
                    <span className="orbit_satellite" />
                </div>
                <div className="hero_deck" role="region" aria-label="Skills and expertise" aria-roledescription="carousel">
                    <div className="hero_deck_stage" aria-live={prefersReducedMotion ? 'polite' : 'off'}>
                        {engineeringSlides.map((slide, index) => {
                            const position = (index - activeSlide + engineeringSlides.length) % engineeringSlides.length

                            return (
                                <article
                                    className={`hero_deck_card hero_deck_card--${slide.accent}${position === 0 ? ' is-active' : ''}`}
                                    key={slide.eyebrow}
                                    aria-hidden={position !== 0}
                                    aria-label={`Slide ${index + 1} of ${engineeringSlides.length}: ${slide.title}`}
                                    aria-roledescription="slide"
                                    style={{ '--stack-depth': position, zIndex: engineeringSlides.length - position }}
                                >
                                    <div className="deck_card_top">
                                        <span className="deck_card_symbol" aria-hidden="true">{slide.symbol}</span>
                                        <span className="deck_card_step">{slide.eyebrow}</span>
                                    </div>
                                    <div className="deck_card_copy">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.description}</p>
                                    </div>
                                    <div className="deck_card_footer">
                                        <code className="deck_card_code">{slide.code}</code>
                                        <span className="deck_card_footer_label">{slide.footer}</span>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                <div className="hero_experience_badge">
                    <strong>6+</strong>
                    <span>years<br />experience</span>
                </div>
                <div className="hero_visual_caption">
                    <span className="caption_mark">&lt;/&gt;</span>
                    <span>Ideas into<br />experiences.</span>
                </div>
            </div>
        </div>
    )
}

export default About
