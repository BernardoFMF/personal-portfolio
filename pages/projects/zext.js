import {
    Container,
    Link,
    List,
    UnorderedList,
    ListItem,
    ModalOverlay,
    Modal,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    useToken,
    AspectRatio,
    Heading,
    Tag
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/projects'
import Section from '../../components/section'
import { Meta } from '../../components/project'

const Project = () => {

  return (
    <Layout title="ZEXT">
      <Container my={10}>
        <Section delay={0.1}>
          <Title>
            ZEXT
          </Title>
        </Section>
        <Section delay={0.2}>
            <Paragraph>
                A simple video sharing platform, where you can browse through videos and users. The user, while authenticated, can also like and post comments on videos, update the profile image and finally upload videos.
            </Paragraph>
            <Paragraph>
                The main goal I had in mind with this project was to learn and consolidate Typescript, using it both on the server and client. Besides Typescript, I also wanted to experiment with MongoDB.
            </Paragraph>
            <Paragraph>
                This project is still in development and is missing some features that will make the user experience more enjoyable, like creating custom lists to save certain videos and creating the notion of subscriptions so that subscribers can be more easily notified of new uploads.
            </Paragraph>
            <Paragraph>
                Finally, I want to migrate the video storage to a cloud service, as currently the videos are stored on disk. This change will make it much easier for the deployment of the application as there will be no more constraints on memory.
            </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Specifications
          </Heading>
          <UnorderedList>
            <ListItem>Ability register and login.</ListItem>
            <ListItem>Browse, search and filter videos or users.</ListItem>
            <ListItem>Add and remove likes from videos.</ListItem>
            <ListItem>Add and remove comments from videos.</ListItem>
            <ListItem>Update profile image.</ListItem>
            <ListItem>Upload videos.</ListItem>
            <ListItem>Stream videos.</ListItem>
          </UnorderedList>
        </Section>
        <Section delay={0.4}>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              N/A
            </ListItem>
            <ListItem>
              <Meta>Github Repository</Meta>
              <Link href="https://github.com/BernardoFMF/zext" color={"intensePink"} isExternal>
              https://github.com/BernardoFMF/zext
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Technologies</Meta>
              <Tag mt={1} ml={1}>NodeJS</Tag>
              <Tag mt={1} ml={1}>Express</Tag>
              <Tag mt={1} ml={1}>NextJs</Tag>
              <Tag mt={1} ml={1}>React Query</Tag>
              <Tag mt={1} ml={1}>React Context</Tag>
              <Tag mt={1} ml={1}>Mantine</Tag>
              <Tag mt={1} ml={1}>MongoDB</Tag>
              <Tag mt={1} ml={1}>Typescript</Tag>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.5}>
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/1HK2GL5N1zY"
                    title="ZEXT [demo]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </AspectRatio>
        </Section>

      </Container>
    </Layout>
  )
}
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'