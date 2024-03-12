import { FC } from "hono/jsx";

const PostBlog: FC = async (props) => {
    return (
        <>
        <main>
            <h2>{props.article_title}</h2>
            {props.children}
        </main>
        </>
    )
}

export default PostBlog