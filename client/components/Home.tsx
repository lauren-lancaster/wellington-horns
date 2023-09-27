import Nav from './Nav'
import Events from './Events'
import { useEffect } from 'react'
import { Container } from '@chakra-ui/react'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Nav />
      <Container>
        <div className="homepage-content">
          <h1>Kia Ora!</h1>
          <p>
            Welcome to the online hub for Wellington horn players. Here you’ll
            find info about community events, classes, exercises, well-being,
            and what everyone’s got going on in their kitchens.{' '}
          </p>
          <p>Have a horn and want to join us? Sign up here or get in touch </p>
        </div>
        <div className="events-page">
          <Events />
        </div>
      </Container>
    </>
  )
}

export default Home
