import { FC } from "hono/jsx";
import { config } from "../config"
import { Head } from "./Head";
import { ArticleList } from "./ArticleList";

export const Layout: FC = (props) => {
    return(
        <html lang={config.lang}>
            <Head />
            <main>
                <h1>{ config.blogtitle }</h1>
                <ArticleList />
            </main>
        </html>
    )
}