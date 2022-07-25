import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link color={"lightPurple"}>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ClickableProjectImage = ({ src, alt, mb, w, onClick }) => (
  <Image onClick={onClick} borderRadius="lg" w={w} src={src} alt={alt} mb={mb} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme={useColorModeValue("purple", "orange")} mr={2}>
    {children}
  </Badge>
)