import Card from '@/components/Card'

export default function ProjectsList({ projectsData }) {
  return (
    <>
      {projectsData.map((group) => (
        <ProjectGroupSection key={group.name} group={group} />
      ))}
    </>
  )
}

function ProjectGroupSection({ group }) {
  return (
    <>
      <h3 className="pb-2 pt-8 text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl">
        {group.name}
      </h3>
      {group.description && (
        <p className="pb-4 text-gray-500 dark:text-gray-400">{group.description}</p>
      )}
      <div className="-m-4 flex flex-wrap">
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
