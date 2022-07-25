import {
    Container,
    Link,
    List,
    ListItem,
    ModalOverlay,
    Modal,
    ModalContent,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ClickableProjectImage } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/projects'
import CarouselItem from '../../components/carouselItem'
import ChakraCarousel from '../../components/carousel'
import { useState } from 'react'
import Section from '../../components/section'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales fermentum viverra. 
            Cras ullamcorper varius facilisis. Praesent convallis condimentum nisi. Praesent ultrices 
            dolor quis ornare pretium. Donec risus mauris, sollicitudin et bibendum in, ullamcorper vitae ipsum. 
            Donec at sapien nec neque eleifend cursus quis sed lacus. Cras accumsan ullamcorper turpis, 
            a cursus dolor tincidunt at. Aliquam erat volutpat.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://surf-management-app.herokuapp.com/" color={"intensePink"} isExternal>
                https://surf-management-app.herokuapp.com/ 
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
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
              <CarouselItem image="/thumbnails/thumbnailESCmanagementApplication.png" alt="Inkdrop" title="ESC" description="teste1" index={2} onClick={onClick}/>
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