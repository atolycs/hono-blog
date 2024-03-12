import socialIcons from "../assets/SocialIcon";
import { FC, Fragment } from "hono/jsx";

export interface Props {
    title: string;
    url: string;
    icon?: string;
    crlf?: boolean
}


const Socials: FC = (props) => {
    const { crlf = true } = props;
    return(
    <>
        <a href={props.url}>
            {props.title}
        </a>
        {crlf ? <br /> : null}
    </>
    )
}

export default Socials;
