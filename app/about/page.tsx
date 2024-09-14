import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import projectsData from '@/data/projectsData'
import ProjectsList from '@/components/ProjectsList'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <a href="/static/pdfs/CV.pdf">
          <button className="rounded bg-primary-600 px-2 py-2 text-gray-100">Resume</button>
        </a>
      </AuthorLayout>
      <div className="container py-6"></div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-4 md:space-y-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl">
            Projects
          </h2>
        </div>
        <div>
          <p className="pt-4 text-gray-500 dark:text-gray-400">
            Here are some of the projects I have worked on.
          </p>
          <ProjectsList projectsData={projectsData} />
        </div>
      </div>
    </>
  )
}
