import Nav from './Nav'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="navbar">
        <Nav />
      </div>
      <div className="homepage-content">
        <h1>About</h1>
      </div>
    </>
  )
}

export default About
