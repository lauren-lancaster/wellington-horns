import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

function Nav() {
  return (
    <>
      <div id="btn-container">
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/profile">
          <button className="nav-btn">Profile</button>
        </Link>
        <LinkScroll to="/events">
          <button className="nav-btn">What's on</button>
        </LinkScroll>
        <Link to="/resources">
          <button className="nav-btn">Resources</button>
        </Link>
        <Link to="/contact">
          <button className="nav-btn">Contact</button>
        </Link>
      </div>
    </>
  )
}

export default Nav
