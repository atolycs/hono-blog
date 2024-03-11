import { FC } from "hono/jsx";
import { config } from "../config";

export const Head: FC = (props) => {
    return (
        <head>
           <title> {config.blogtitle} </title>
           <meta charset="utf-8" />
        </head>
    )
}