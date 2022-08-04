import Logo from "./logo"
import NextLink from "next/link"
import { Container, Box, Link, Text, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, Icon} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import ThemeToggleButton from "./themeTottleButton"

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray200", "whitealpha.900")

    return (
        <NextLink href={href} passHref scroll={false}>
            <Link 
                p={2} 
                borderRadius={4}
                bg={active ? "lightPurple" : undefined}
                color={active ? "#202023" : inactiveColor}
                {...props}
            >
                { children }
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{ backdropFilter: "blur(10px)"}}
            zIndex={1}
            { ...props }
        >
            <Container 
                display="flex" 
                p={2} 
                maxW="container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg">
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/" path={path}>
                        Home
                    </LinkItem>
                    <Text fontSize={"lg"}>
                        /
                    </Text>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <Text fontSize={"lg"}>
                        /
                    </Text>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/BernardoFMF"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        isExternal={true}
                    >
                        <IoLogoGithub size={20} />
                    </LinkItem>
                    <Text fontSize={"lg"}>
                        /
                    </Text>
                    <LinkItem
                        target="_blank"
                        href="https://linkedin.com/in/bernardofragoso/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        isExternal={true}
                    >
                        <IoLogoLinkedin size={20} />
                    </LinkItem>
                    <Text fontSize={"lg"}>
                        /
                    </Text>
                    <LinkItem
                        target="_blank"
                        href="/412251072_20220728200005453[915].pdf"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        isExternal={true}
                        download={true}
                    >
                        Curriculum vitae
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/BernardoFMF"
                                    isExternal
                                >
                                    Github
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://linkedin.com/in/bernardofragoso/"
                                    isExternal
                                >
                                    LinkedIn
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="/412251072_20220728200005453[915].pdf"
                                    download={true}
                                    isExternal
                                >
                                    LinkedIn
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar