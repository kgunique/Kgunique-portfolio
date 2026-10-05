import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <span>Designed and built by Karan Kumar.</span>
            <span>© {new Date().getFullYear()} Karan Kumar</span>
        </footer>
    )
}

export default Footer
