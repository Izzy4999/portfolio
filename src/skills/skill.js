import emoji from "react-easy-emoji"
import fullstack from "../lottie/skills/fullstack.json";
import cloud from "../lottie/skills/cloudinfra.json"

export const skills =[
  {title:"Full Stack Development",displaylottie:fullstack,
  softwareSkills:[
    {
      skillName: 'HTML-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'CSS-3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'Reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'Nextjs',
      fontAwesomeClassname: 'vscode-icons:file-type-light-next',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'logos:python',
    },
    {
      skillName: 'Django',
      fontAwesomeClassname: 'vscode-icons:file-type-django',
    },
    {
      skillName: 'NPM',
      fontAwesomeClassname: 'logos:npm-icon',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'skill-icons:typescript',
    },
    {
      skillName: 'Express',
      fontAwesomeClassname: 'skill-icons:expressjs-light',
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'logos:mongodb',
    },
  ],
  skillStyle:[
    emoji(
      '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
    ),
    emoji('⚡ Building responsive static websites using Next.js'),
    emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
    emoji('⚡ Building RESTful APIs in Node Js & Express REST Framework'),
  ]},
  {
    title:"Cloud Infrastructure",
    displaylottie: cloud,
    softwareSkills:[
      {
        skillName: 'AWS',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'Heroku',
        fontAwesomeClassname: 'logos:heroku-icon',
      },
      {
        skillName: 'PostgreSQL',
        fontAwesomeClassname: 'logos:postgresql',
      },
      {
        skillName: 'Github',
        fontAwesomeClassname: 'akar-icons:github-fill',
      },
      {
        skillName: 'Github Actions',
        fontAwesomeClassname: 'logos:github-actions',
      },
      {
        skillName: 'Sentry',
        fontAwesomeClassname: 'logos:sentry-icon',
      },
      {
        skillName:"Vercel",
        fontAwesomeClassname: "logos:vercel"
      }
    ],
    skillStyle:[
      emoji('⚡ Experience of working on multiple cloud platforms'),
      emoji(
        '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
      ),
      ]
  }
]
export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

