import { Box, Grid, GridItem, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Image from "next/image"
import Section from "./section"

const Hero = () => {
    const detailImg = `/images/logo${useColorModeValue('', '-dark')}.svg`
    
    return (
        <Box
            mt={6}
            position="relative"
        >
            <Grid
                templateColumns="15fr 85fr"
                templateRows="2fr 16fr 10"
                width="100%"
                height="100%"
            >
                
                <GridItem gridColumn="1" gridRow="1">
                    <Section delay={0.1}>
                        <Text fontSize={"lg"}>
                            Hi, my name is
                        </Text>
                    </Section>
                </GridItem>
                <GridItem gridColumn="1" gridRow="2">
                    <Section delay={0.2}>
                        <Heading as="h1" size="lg" color={"lightPurple"}>
                            Bernardo
                        </Heading>
                    </Section>
                </GridItem>
                <GridItem gridColumn="1" gridRow="3 / 4">
                    <Section delay={0.3}>
                        <Heading as="h1" size="4xl">
                            And
                        </Heading>
                    </Section>
                </GridItem>
                <GridItem pl={2} gridColumn="2 / 3" gridRow="3">
                    <Section delay={0.4}>
                        <Text fontSize={"lg"}>
                            I&apos;m a
                        </Text> 
                    </Section>
                </GridItem>
                <GridItem pl={2} gridColumn="2 / 3" gridRow="3" mt={8}>
                    <Section delay={0.5}>
                        <Heading as="h1" size="lg">
                            Software Developer
                        </Heading>
                    </Section>
                </GridItem>
                <GridItem position="absolute" right={0} gridColumn="2" gridRow="1 / 3" zIndex={-10}>
                    <Section delay={0.7}>
                        <Image src={detailImg} width={200} height={200} alt="logo" />
                    </Section>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Hero