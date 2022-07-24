import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../theme/index"
import Fonts from "../components/fonts"

function Portfolio({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component { ...pageProps } key={router.route} />
            </Layout>
        
        </ChakraProvider>
    )
}

export default Portfolio