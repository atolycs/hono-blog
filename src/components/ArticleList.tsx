import { PositionProps } from "@chakra-ui/react";
import { FC } from "hono/jsx";
import MetaHeader from "./MetaHeader";


export interface Props {
    posts?: Object;
}

type Posts = any;

const ArticleList: FC< {posts: Posts[]} > = (props) => {
    const { posts } = props
    return(
        <>
        <section>
        {
            posts.map((post) => (
                <p>
                <a
                    href={`/blog/${post.id}`}
                >{post.title}</a><br/>
                   {post.body}
                
                </p>
            ))
        }
        </section>

        </>
    )
}

export default ArticleList;