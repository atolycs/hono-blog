import { FC } from "hono/jsx"
//import { ChakraProvider } from "@chakra-ui/react"
import MetaHeader from "../components/MetaHeader"
import Footer from "./Footer"


const BaseLayout: FC = (props) => {
    return (
    <>
    <html>
      <head>
        <MetaHeader title="Thisistest"/>
      </head>
      <main>
        {props.children}
      </main>
      <Footer/>
    </html>
    </>
  )
}

export default BaseLayout