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
import Image from "next/image"
import Section from '../components/section'

const NotFound = () => {
  const detailImg = `/images/logo${useColorModeValue('', '-dark')}.svg`
  return (
    <Container mt={20}>
      <Section delay={0.1}>
        <Heading as="h1" color={"lightPurple"}>Not found</Heading>
      </Section>
      <Section delay={0.2}>
        <Text>The page you&apos;re looking for doesn&apos;t exist</Text>
      </Section>
      <Section delay={0.4}>
        <Box display="flex" position="absolute" mt={-20} ml={200} mr={10} zIndex={-1}>
          <Image src={detailImg} width={200} height={200} alt="logo" />
        </Box>
      </Section>
      <Section delay={0.5}>
        <Divider mt={200} mb={6} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme={useColorModeValue('purple', 'orange')}>Return to home</Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default NotFound