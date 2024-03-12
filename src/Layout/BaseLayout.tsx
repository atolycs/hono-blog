import { FC } from "hono/jsx"
//import { ChakraProvider } from "@chakra-ui/react"
import MetaHeader from "../components/MetaHeader"
import Footer from "./Footer"

type Props = {
  title?: string
}


const BaseLayout: FC = (props) => {
  const { title = "This is test" } = props
    return (
    <>
     <html>
       <head>
         <MetaHeader title={title}/>
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