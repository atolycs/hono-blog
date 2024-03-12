import { FC } from "hono/jsx";
import Socials from "../components/Socials";


const Footer: FC = (props) => {
    return (
        <>
        <footer>
            <Socials url="https://github.com/atolycs" title="Github" icon="Github" crlf={true} />
        </footer>
        </>
    )
}

export default Footer;

