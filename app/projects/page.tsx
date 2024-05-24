import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          {projectsData.map((group) => (
            <ProjectGroupSection group={group} />
          ))}
        </div>
        <div className="container py-12"></div>
      </div>
    </>
  )
}

function ProjectGroupSection({ group }) {
  return (
    <>
      <h3 className="center pt-4 text-3xl font-bold leading-8 tracking-tight">{group.name}</h3>
      <div className="-m-4 flex flex-wrap">
        <br />
        {group.projects.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
          />
        ))}
      </div>
    </>
  )
}
