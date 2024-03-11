import { FC } from "hono/jsx";

export const Link: FC = (props) => {
    console.log(props)
    console.log(`Placing ...`)
    return(
        <a href={props.url}>{props.link_title}</a>
    )
}