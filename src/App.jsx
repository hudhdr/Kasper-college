import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useInRouterContext, useLocation } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/programs'
import Title from './Components/Title/Title'
import Rules from './Components/3Rules/Rules'
import Campus from './Components/Campus/Campus'
import Testi from './Components/Testimonials/Testi'
import Contact from './Components/Contact/contact'
import About from './Components/pages/About'
import Student from './Components/pages/Student'
import Business from './Components/pages/Business'

import './App.css'
import './Components/Mobile/Mobile.css'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    path: 'M13.5 8H11V6.5c0-.7.4-.9.8-.9h1.7V3.1L11.2 3C8.9 3 8 4.4 8 6.2V8H6v3h2v8h3v-8h2.3l.2-3Z'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    path: 'M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h4v12H3V9Zm6 0h4v1.7c.6-1.1 1.7-2 3.6-2 3.2 0 4.4 2.1 4.4 5.3V21h-4v-6.2c0-1.5-.3-2.7-1.9-2.7-1.7 0-2.1 1.3-2.1 2.7V21H9V9Z'
  }
]

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const BackToTopButton = () => (
  <button
    type="button"
    className="back-to-top-button"
    aria-label="Back to top"
    title="Back to top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span className="back-to-top-arrow" aria-hidden="true">↑</span>
  </button>
)

const App = () => {
  const isInsideRouter = useInRouterContext()

  const app = (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <div className="container">
                <Title subTitle="Explore Yourself" title="Build Your Dream" />
                <Programs />
                <Rules />

                <Title subTitle="Gallery" title="Campus" />
                <Campus />

                <Title subTitle="Testimonials" title="What the Students Say About Our Campus" />
                <Testi />
              </div>
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/business" element={<Business />} />
      </Routes>

      <div className="container">
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
      </div>

      <BackToTopButton />

      <footer className="footer">
        <div className="footer-content">
          <div>
            <strong className="footer-name">Kasper College</strong>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Kasper College. All rights reserved.
            </p>
          </div>

          <div className="social-links" aria-label="Social media">
            {socialLinks.map(({ name, url, path }) => (
              <a
                key={name}
                className="social-link"
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )

  return isInsideRouter ? app : <BrowserRouter>{app}</BrowserRouter>
}

export default App