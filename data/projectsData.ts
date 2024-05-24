interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

interface ProjectGroup {
  name: string
  description?: string
  projects: Project[]
}

const universityProjects: ProjectGroup = {
  name: 'University',
  projects: [
    {
      title: 'WACC',
      description: `In this project, our team developed a WACC compiler in Scala using the Parsley library. The compiler performs syntactic analysis, semantic analysis, and code generation, producing x86 assembly code in Intel syntax. It includes robust error and warning handling. WACC is a strongly typed, imperative language with a syntax similar to C and bash, supporting function calls, arrays, pairs, and IO.`,
      imgSrc: '/static/images/projects/wacc.jpg',
      href: 'https://terencehernandez.com/files/WACC/WACCLangSpec.pdf',
    },
    {
      title: 'PintOS',
      description: `In this 2nd-year university project, our team developed key operating system features in C. We implemented thread scheduling, concurrency support (locks, semaphores), thread sleeping, and system calls. We also produced concise reports detailing the program's design and behavior, gaining valuable experience in operating system concepts and low-level programming.`,
      imgSrc: '/static/images/projects/pintos.jpg',
      href: 'https://www.doc.ic.ac.uk/~mjw03/OSLab/pintos.pdf',
    },
  ],
  description:
    'In adherence to university regulations, I am unable to publicly disclose repositories for some of the projects. However, the code is available for review upon request.',
}

const workProjects: ProjectGroup = {
  name: 'Work',
  projects: [
    {
      title: 'OnetWatch',
      description: `At Ringier Axel Springer Poland, I contributed to the Onet Watch project, a vertical video player for the mobile version of the Onet web app. I was involved from the project's inception through to its deployment. My primary contribution was redesigning the use of Intersection Observers, which significantly enhanced the application's performance.`,
      imgSrc: '/static/images/projects/OnetWatch.jpg',
      href: 'https://www.onet.pl/watch?src=bottomBarOnet',
    },
  ],
}

const openSourceProjects: ProjectGroup = {
  name: 'Open Source',
  projects: [
    {
      title: 'Doodle',
      description:
        "I contribute to Doodle, an open-source 2D graphics library for Scala. It's a great platform for learning the language and practicing functional programming principles. I developed an API for converting pictures to bitmaps and am currently working on introducing convolution operations to the library.",
      imgSrc: '/static/images/projects/doodle.png',
      href: 'https://github.com/creativescala/doodle',
    },
  ],
}

const projectsData: ProjectGroup[] = [workProjects, universityProjects, openSourceProjects]

export default projectsData
