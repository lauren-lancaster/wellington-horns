import Nav from './Nav'
import { useEffect } from 'react'

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="navbar">
        <Nav />
      </div>
      <div className="homepage-content">
        <h1>Events</h1>
      </div>
    </>
  )
}

export default Events
