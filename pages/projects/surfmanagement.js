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
    Heading,
    Tag
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ClickableProjectImage } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/projects'
import { useState } from 'react'
import Section from '../../components/section'
import { Meta } from '../../components/project'

const Overlay = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px)'
  />
)

const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ image, setImage ] = useState(null)
  const onClick = (image) => {
    setImage(image)
    onOpen()
  }
  return (
    <Layout title="Surf Club Management Application">
      <Container my={10}>      
        <Modal isCentered isOpen={isOpen} allowPinchZoom size={"2xl"} onClose={() => {onClose(); setImage(null)}}>
          <Overlay />
          <ModalContent>
            <ModalCloseButton />
              <ClickableProjectImage src={image} w={"full"} mb={0} alt="focused-image" />
          </ModalContent>
        </Modal>

        <Section delay={0.1}>
          <Title>
            Surf Club Management Application
          </Title>
        </Section>
        <Section delay={0.2}>
          <Paragraph>
            The project was done in partnership with <span><Link href="https://www.linkedin.com/company/ericeira-surf-clube/" color={"intensePink"} isExternal>Ericeira Surf Clube</Link></span> to help create a management application that will be used within the organization to manage their members.
            The focus with this project was to deliver a great user experience and user interface, along with the ability to automate tedious tasks and create a way for the community to grow. 
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Specifications
          </Heading>
          <UnorderedList>
            <ListItem>Ability to create, update and delete members, sports, associations between members and sports, quotas and events.</ListItem>
            <ListItem>Responsive design.</ListItem>
            <ListItem>Internationalization (portuguese / english).</ListItem>
            <ListItem>Email notifications on new events and due quotas.</ListItem>
            <ListItem>Upload data to the system using csv files.</ListItem>
            <ListItem>Reset password and allow for credentials (username and password) change.</ListItem>
          </UnorderedList>
        </Section>
        <Section delay={0.4}>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://surf-management-app.herokuapp.com/" color={"intensePink"} isExternal>
                https://surf-management-app.herokuapp.com/ 
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Github Repository</Meta>
              <Link href="https://github.com/BernardoFMF/surf-management-app" color={"intensePink"} isExternal>
                https://github.com/BernardoFMF/surf-management-app
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Technologies</Meta>
              <Tag mt={1} ml={1}>NodeJS</Tag>
              <Tag mt={1} ml={1}>Express</Tag>
              <Tag mt={1} ml={1}>React</Tag>
              <Tag mt={1} ml={1}>React Redux</Tag>
              <Tag mt={1} ml={1}>Material UI</Tag>
              <Tag mt={1} ml={1}>PostgreSQL</Tag>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.5}>
          <ClickableProjectImage 
            src={'/thumbnails/surfManagementAppMockup1.jpg'} 
            w={"full"} 
            mb={6} 
            alt="surf-management-mockup-1" 
            onClick={() => onClick('/thumbnails/surfManagementAppMockup1.jpg')} />
          <ClickableProjectImage 
            src={'/thumbnails/surfManagementAppMockup2.jpg'} 
            w={"full"} 
            mb={6} 
            alt="surf-management-mockup-1" 
            onClick={() => onClick('/thumbnails/surfManagementAppMockup2.jpg')} />
            <Paragraph>
              Both mockups use assets created by <Link href="https://www.freepik.com/author/mockup-store" color={"intensePink"} isExternal>mockup.store</Link>.
            </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
  
export default Project
export { getServerSideProps } from '../../components/chakra'