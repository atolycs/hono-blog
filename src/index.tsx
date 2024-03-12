import { Hono } from 'hono'
import { renderer } from './renderer'
import { getPosts, getPost } from './lib/post'
import BaseLayout from './Layout/BaseLayout'
import ArticleList from './components/ArticleList'
import ssgBuild from '@hono/vite-ssg'
import PostBlog from './Layout/PostBlog'
import { ssgParams } from 'hono/ssg'

const app = new Hono()

//app.get('*', renderer)

app.get('/', (c) => {
//  return c.render(<h1>Hello!</h1>)
  return c.render(
    <BaseLayout>
      <h1>Hello!</h1>
      <h2>This is a test</h2>
      <h3>This is a test</h3>
      <h4>This is a test</h4>
      <h5>This is a test</h5>
      <h6>This is a test</h6>
      <h7>This is a test</h7>
      <h8>This is a test</h8>
      <h9>This is a test</h9>
      <h10>This is a test</h10>
      <h11>This is a test</h11>
      <h12>This is a test</h12>
      <h13>This is a test</h13>
      <h14>This is a test</h14>
      <h15>This is a test</h15>
      <h16>This is a test</h16>
      <h17>This is a test</h17>
      <h18>This is a test</h18>
    </BaseLayout>
  )
})


app.get("/blog", async (c) => {
  const posts = await getPosts()

  return c.render(
    <BaseLayout>
      <ArticleList posts={posts} />
    </BaseLayout>
  )
})


app.get(
  "/blog/:slug",
  ssgParams(async () => {
    const posts = await getPosts()
    return posts.map((post) => {
      return {
        slug: post.slug
      }
     })
    }),

  async(c) => {
    const markdown_article = await getPost(c.req.param("slug"))

    return c.render(
      <BaseLayout title={`${markdown_article.title} - This is test`}>
        <PostBlog post={markdown_article} />
      </BaseLayout>
    )
  }
)
export default app
