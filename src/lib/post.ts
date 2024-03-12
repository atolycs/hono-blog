import fs from "fs"
import path from "path"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"

import remarkFrontmatter from "remark-frontmatter"
import remarkExtractFrontmatter from "remark-extract-frontmatter"
import yaml from "yaml"


type Post = {
    slug: string;
    title: string;
    pubDate: string;
    editDate?: string;
    description: string;
    body: string;
    heroImage?: string;
}

const postDir = "content/blog"
const postFiles = fs.readdirSync(postDir)

export const getPosts = async () => {
    const posts: Post[] = await Promise.all(
        postFiles.map(async (file) => {
            console.debug(`Loading ${file}...`)
            const filePath = path.join(postDir, file);
            const content = fs.readFileSync(filePath, { encoding: "utf-8" })
            const result = await remark()
                .use(remarkParse)
                .use(remarkFrontmatter, [
                    {
                        type: "yaml",
                        marker: "-",
                        anywhere: false
                    }
                ])
                .use(remarkExtractFrontmatter, {
                    yaml: yaml.parse,
                    name: "frontMatter",
                })
                .use(remarkGfm)
                .use(remarkRehype, { allowDangerousHtml: true })
                .use(rehypeStringify, { allowDangerousHtml: true })
                .use(remarkGfm)
                .process(content)
            const post: Post = {
                slug: path.parse(path.basename(filePath)).name,
                title: (result.data.frontMatter as Post).title,
                pubDate: (result.data.frontMatter as Post)?.pubDate,
                editDate: (result.data.frontMatter as Post)?.editDate,
                description: (result.data.frontMatter as Post)?.description,
                body: result.toString(),
            }
            return post;
        })
    )
    posts.sort((a,b) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    })

    return posts;
}