import { Box, Container, Heading, Text, Button, useToken, useColorModeValue } from "@chakra-ui/react"
import Hero from "../components/hero"
import NextLink from 'next/link'
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from "../components/layouts/projects"
import { MetaTitle, SkillSection } from "../components/skills"

const Home = () => {
    const skillProps = {
        textColor: useToken("colors", ["whiteAlpha.900"])[0],
        color: useToken("colors", ["lightPurple"])[0]
    }

    return (
        <Layout>
            <Container>
                <Box mt={10}>
                    <Hero />
                </Box>
                <Section delay={0.8}>
                    <Box mt={20}>
                        <Heading as="h3" variant="section-title">
                            About me
                        </Heading>
                        <Paragraph>
                            I'm a Software Engineer based in Portugal with a passion for programming and breathing life into new ideas, 
                            always going the extra mile to create a project i can proudly show off. 
                            Experienced in developing web applications including both frontend and backend always bringing excellent user experience and accessibility.
                        </Paragraph>
                    </Box>
                </Section>
                <Section delay={0.9}>
                    <Box mt={5}>
                        <Heading as="h3" variant="section-title">
                            Education
                        </Heading>
                        <Paragraph>
                            Bachelor’s degree in Computer Science and Software Engineering at{" "}
                                <Text as={"span"} textColor="lightPurple">ISEL</Text>
                            .
                        </Paragraph>
                    </Box>
                </Section>
                <Section delay={1.0}>
                    <Box mt={5}>
                        <Heading as="h3" variant="section-title">
                            Skills
                        </Heading>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Frontend</MetaTitle>
                            ReactJs / NextJs / Html &#38; Css
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Backend</MetaTitle>
                            NodeJs / Express / Spring Boot
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Databases</MetaTitle>
                            PostgreSQL / SQL Server / MongoDB / Firestore / Prisma (ORM)
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Others</MetaTitle>
                            Java / C# / Javascript / Typescript / C / Kotlin
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Cloud</MetaTitle>
                            gRPC / GPC services (PubSub, Storage, Compute Engine, Cloud Functions)
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Testing</MetaTitle>
                            Jest, Supertest, JUnit, XUnit
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Tools &#38; IDE</MetaTitle>
                            Figma / VS Code / Intellij
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Version Control</MetaTitle>
                            Git
                        </SkillSection>
                    </Box>
                </Section>
                <Section delay={1.1}>
                    <Box align="center" my={8}>
                        <NextLink href="/projects" passHref scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue("purple", "orange")}>
                                My Projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'