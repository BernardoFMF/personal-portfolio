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
    Heading
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ClickableProjectImage } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/projects'
import CarouselItem from '../../components/carouselItem'
import ChakraCarousel from '../../components/carousel'
import { useState } from 'react'
import Section from '../../components/section'
import { MetaTitle } from '../../components/skills'

const Overlay = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px)'
  />
)

const Project = () => {
  const skillProps = {
    textColor: useToken("colors", ["whiteAlpha.900"])[0],
    color: useToken("colors", ["lightPurple"])[0]
  }

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
            Project done in partnership with Ericeira Surf Clube to help create management application that will be used within the organization to manage their members.
            The focus with this project was to deliver a great UX and UI, along with the ability to automate tedious tasks. 
          </Paragraph>
          <Paragraph>
            Another important reason for creating the software was to create a membership card system so that members can obtain discounts on partner companies by 
            showing the QRcode within the membership card and inputting the secret pin of the correspondent user.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Specifications
          </Heading>
          <UnorderedList>
            <ListItem>Ability to create, update &#38; delete members, sports, associations between members and sports, quotas &#38; events.</ListItem>
            <ListItem>Responsive design.</ListItem>
            <ListItem>Internationalization (portuguese / english).</ListItem>
            <ListItem>Email notifications on new events &#38; due quotas.</ListItem>
            <ListItem>Reset password &#38; credentials change.</ListItem>
            <ListItem>Upload data to the system using csv files.</ListItem>
          </UnorderedList>
        </Section>
        <Section delay={0.4}>
          <List ml={4} my={4}>
            <ListItem>
              <MetaTitle>Website</MetaTitle>
              <Link href="https://surf-management-app.herokuapp.com/" color={"intensePink"} isExternal>
                https://surf-management-app.herokuapp.com/ 
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <MetaTitle>Github Repository</MetaTitle>
              <Link href="https://github.com/BernardoFMF/surf-management-app" color={"intensePink"} isExternal>
                https://github.com/BernardoFMF/surf-management-app 
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <MetaTitle>Stack</MetaTitle>
              <span>NodeJS, Express, React, React-Redux, Material UI &#38; PostgreSQL</span>
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
              Both mockups use assets created by <Link href="https://www.freepik.com/author/mockup-store" color={"intensePink"} isExternal>mockup.store</Link>
            </Paragraph>
        </Section>
        <Section delay={0.6}>
          <Container
            py={8}
            px={0}
            maxW={{
                base: "100%",
                sm: "35rem",
                md: "43.75rem",
                lg: "57.5rem",
                xl: "75rem",
                xxl: "87.5rem"
            }}
            alignContent="center"
          >
            <ChakraCarousel gap={20}>
              <CarouselItem image="/thumbnails/thumbnailESCmanagementApplication.png" alt="Inkdrop" title="ESC" description="teste1" index={1} onClick={onClick}/>
              <CarouselItem title="ESC" description="teste1" index={2} onClick={onClick}/>
              <CarouselItem image="/thumbnails/thumbnailESCmanagementApplication.png" alt="Inkdrop" title="ESC" description="teste1" index={3} onClick={onClick}/>
              <CarouselItem image="/thumbnails/thumbnailESCmanagementApplication.png" alt="Inkdrop" title="ESC" description="teste1" index={4} onClick={onClick}/>
            </ChakraCarousel>
          </Container>
        </Section>
      </Container>
    </Layout>
  )
}
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'