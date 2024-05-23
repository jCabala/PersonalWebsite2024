interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

interface ProjectGroup {
  name: string
  projects: Project[]
}

const universityProjects: ProjectGroup = {
  name: 'University',
  projects: [
    {
      title: 'PintOS',
      description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
      imgSrc: '/static/images/pintos.jpg',
      href: 'https://www.doc.ic.ac.uk/~mjw03/OSLab/pintos.pdf',
    },
    {
      title: 'WACC',
      description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
      imgSrc: '/static/images/pintos.jpg',
      href: 'https://www.doc.ic.ac.uk/~mjw03/OSLab/pintos.pdf',
    },
  ],
}

const projectsData: ProjectGroup[] = [universityProjects]

export default projectsData
