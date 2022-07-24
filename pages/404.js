import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container mt={20}>
      <Heading as="h1" color={"lightPurple"}>Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme={useColorModeValue('purple', 'orange')}>Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound