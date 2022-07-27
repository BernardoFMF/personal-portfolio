import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/projects'
import Section from '../components/section'
import { ProjectGridItem } from '../components/gridItem'
import surfManagementApp from '../public/thumbnails/surfManagementAppMockup2.jpg'

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container my={10}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="surfmanagement" title="Surf Club Management Application" thumbnail={surfManagementApp}>
                            A management application to keep track of the clubs members as well as their quotas, sports &#38; events.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
                <Box align="center" opacity={0.4} mt={6} fontSize="sm">
                    More projects coming soon.
                </Box>
            </Container>
        </Layout>
    )
}

export default Projects
export { getServerSideProps } from '../components/chakra'