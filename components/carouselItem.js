import { Flex, VStack, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { ClickableProjectImage } from "./project"

const CarouselItem = ({ image, alt, index, title, description, onClick }) => (
    <Flex
        key={index}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        justifyContent="space-between"
        flexDirection="column"
        overflow="hidden"
        color="gray.300"
        bg="base.d100"
        rounded={5}
        flex={1}
        p={3}
        height={400}
        mx={2}
    >
        <VStack mb={6}>
            {
                title && 
                    <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign="left"
                        w="full"
                        mb={2}
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    >
                        {title}
                    </Heading>
            }
            {
                image && <ClickableProjectImage src={image} alt={alt} w={400} mb={4} onClick={() => onClick(image)} />
            }
            {
                image && <ClickableProjectImage src={image} alt={alt} w={400} mb={4} onClick={() => onClick(image)} />
            }
            {
                description && <Text w="full" color={useColorModeValue("gray.800", "whiteAlpha.900")}>{description}</Text>
            }
        </VStack>
    </Flex>
)

export default CarouselItem