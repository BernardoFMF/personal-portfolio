import Chakra from '../components/chakra'
import Layout from "../components/layouts/main"
import theme from "../theme/index"
import Fonts from "../components/fonts"
import { AnimatePresence } from "framer-motion"

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function Portfolio({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Portfolio