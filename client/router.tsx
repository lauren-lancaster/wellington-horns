import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Events from './components/Events'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Profile from './components/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="resources" element={<Resources />} />
      <Route path="contact" element={<Contact />} />
      <Route path=":userid/profile" element={<Profile />} />
    </Route>
  )
)

export default router
