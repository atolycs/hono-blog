import { Hono } from 'hono'
import { renderer } from './renderer'

import { Layout } from "./components/BaseLayout"
import { ssgParams } from 'hono/ssg'

const app = new Hono()

//app.get('*', renderer)

app.get('/', (c) => {
//  return c.render(<h1>Hello!</h1>)
  return c.render(
    <Layout />
  )
})

export default app
