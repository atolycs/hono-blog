import { FC } from "hono/jsx";
import MetaHeader from "../components/MetaHeader";

const PostBlog: FC = async (props) => {
    return (
        <>
        <MetaHeader title={`${props.post.title} - This is test`} />
        <main>
            {props.post.body}
        </main>
        </>
    )
}

export default PostBlog