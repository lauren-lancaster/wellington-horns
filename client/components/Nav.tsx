import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

function Nav() {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Welly Horns</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="yellow">Sign Up</Button>
          <Button colorScheme="yellow">Log in</Button>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link to="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <LinkScroll to="/events">
                <MenuItem>What's on</MenuItem>
              </LinkScroll>
              <Link to="/resources">
                <MenuItem>Resources</MenuItem>
              </Link>
              <Link to="/contact">
                <MenuItem>Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Flex>
    </>
  )
}

export default Nav
