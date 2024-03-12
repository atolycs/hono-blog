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
       <body>
       <main>
         {props.children}
       </main>
       <Footer/>
       </body>
     </html>
    </>
  )
}

export default BaseLayout