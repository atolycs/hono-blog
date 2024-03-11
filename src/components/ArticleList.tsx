import { FC } from "hono/jsx";
import { getPosts } from "../lib/post";
//import { Link } from "./Link";


export const ArticleList: FC = async (props) => {
    const posts = await getPosts()
    console.log(props)
    console.log(posts)
    return(
        <>
        <div class="article_list">
            <h2> 記事一覧 </h2>
            <ul>
                {posts.map((post) => {
                    {console.log(post)}
                    <li>
                        <a href={`/blog/${post.slug}`}>
                            {post.title}
                        </a>
                    </li>
                })}
            </ul>
        </div>
        </>
    )
}