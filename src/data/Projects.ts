import { Project } from '../components/models';
const projects: Project[] = [
  {
    id: '64d45a925a97fc4efd8a8075',
    name: 'GCONN',
    type: 'Web Development',
    description:
      "GCONN is an innovative e-commerce platform specially designed for Valorant fans. Built using the latest technology, this project combines the capabilities of Front End React Js, Back End Node Js, and real-time interactivity through Socket.io. GCONN's main advantage is its ability to facilitate buying and selling game accounts, with a focus on Valorant games, as well as providing a filter feature to search for accounts with specific skins.",
    url: 'https://gconn.netlify.app/',
    urlGithub: 'https://github.com/AnnasIsmail/GCONN',
    image: [require('../assets/gconn.png')],
  },
  {
    id: '64d45aa55a97fc4efd8a8076',
    name: 'Account Nguk',
    type: 'Web Development',
    description:
      'Account Nguk is an innovative project that provides a complete solution for fans of the Valorant game. Focusing on providing game account sharing services between friends as well as important information related to Valorant, this project uses Front End React JS and Back End Node JS to create a comprehensive and interactive experience.',
    url: 'https://account-nguk.netlify.app/',
    urlGithub: 'https://github.com/AnnasIsmail/account-nguk-react',
    image: [require('../assets/account-nguk_dashboard.png')],
  },
  {
    id: '64551d8ff0ff386cc51044c5',
    name: 'My Portfolio',
    type: 'Web Development',
    description:
      'Through this Portfolio project, my main goal is to provide an introduction about myself and the journey I have taken. In this effort, the Portfolio platform is designed by utilizing the latest technology, especially Vue.js through the Quasar framework. This approach allows me to provide a very comprehensive and in-depth overview of my profile.',
    url: 'https://annas-ismail-muhammad-portofolio.netlify.app/#/',
    urlGithub: 'https://github.com/AnnasIsmail/my-portofolio-with-quasar',
    image: [require('../assets/my-portfolio.png')],
  },
];

export default projects;
