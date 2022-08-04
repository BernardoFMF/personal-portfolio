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
                            I&apos;m a software developer based in Portugal with a passion for programming and breathing life into new ideas, 
                            always giving my best to create a project I can proudly show off as my creation.
                        </Paragraph>
                        <Paragraph>
                            I have experience in developing web applications, including both frontend and backend, 
                            always bringing a great user experience and accessibility.
                        </Paragraph>
                        <Paragraph>
                            One of my favorite activities is just jamming on the guitar, watch tv shows or just programming (who would&apos;ve guessed, right?).
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
                            ReactJs / NextJs / Material UI / Chakra UI / Typescript
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Backend</MetaTitle>
                            NodeJs / Express / Typescript
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Databases</MetaTitle>
                            PostgreSQL / MongoDB / Firestore / Prisma (ORM)
                        </SkillSection>
                        <SkillSection>
                            <MetaTitle { ...skillProps }>Others</MetaTitle>
                            Java / C# / Javascript / C / Kotlin
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
                            Figma / Visual Studio Code / Intellij / Git
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