import { Skill } from '../components/models';
const Skills: Skill[] = [
  {
    id: '64cd01363807d1327729473e',
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    icon: 'logos:bootstrap',
    type: 'framework',
    description:
      'Bootstrap is a popular front-end framework that provides a set of pre-designed components and styles to help developers create responsive and visually appealing web applications.',
  },
  {
    id: '64cd01363807d1327729473f',
    name: 'React JS',
    link: 'https://reactjs.org/',
    icon: 'logos:react',
    type: 'library',
    description:
      'React JS is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.',
  },
  {
    id: '64cd01363807d13277294740',
    name: 'Vue JS',
    link: 'https://vuejs.org/',
    icon: 'logos:vue',
    type: 'framework',
    description:
      'Vue JS is a progressive JavaScript framework that is known for its simplicity and flexibility. It allows developers to build interactive and dynamic user interfaces for web applications.',
  },
  {
    id: '64cd01363807d13277294741',
    name: 'Node JS',
    link: 'https://nodejs.org/',
    icon: 'logos:nodejs',
    type: 'framework',
    description:
      'Node.js is a runtime environment that allows developers to execute JavaScript on the server side. It is built on the V8 JavaScript engine and enables non-blocking, event-driven I/O operations.',
  },
  {
    id: '64cd01363807d13277294742',
    name: 'HTML',
    link: 'https://www.w3schools.com/html/',
    icon: 'logos:html-5',
    type: 'language',
    description:
      'HTML (Hypertext Markup Language) is the standard markup language used to structure content on the web. It defines the structure and presentation of web pages.',
  },
  {
    id: '64cd01363807d13277294743',
    name: 'CSS',
    link: 'https://www.w3schools.com/css/',
    icon: 'logos:css-3',
    type: 'language',
    description:
      'CSS (Cascading Style Sheets) is used to define the visual presentation of web pages written in HTML. It allows developers to control the layout, colors, fonts, and other design aspects of a website.',
  },
  {
    id: '64cd01363807d13277294744',
    name: 'Javascript',
    link: 'https://www.javascript.com/',
    icon: 'logos:javascript',
    type: 'language',
    description:
      'JavaScript is a versatile scripting language that enables interactivity and dynamic behavior in web applications. It runs in browsers and can be used for both client-side and server-side programming.',
  },
  {
    id: '64cd01363807d13277294745',
    name: 'JAVA',
    link: 'https://www.java.com/',
    icon: 'logos:java',
    type: 'language',
    description:
      'Java is a widely-used, class-based, object-oriented programming language. It is known for its portability and is commonly used in various types of applications, from desktop software to web applications.',
  },
  {
    id: '64cd01363807d13277294746',
    name: 'PHP',
    link: 'https://www.php.net/',
    icon: 'devicon:php',
    type: 'language',
    description:
      'PHP is a server-side scripting language designed for web development. It is commonly used to create dynamic web pages and web applications, interacting with databases and other services.',
  },
  {
    id: '64cd01363807d13277294747',
    name: 'Material UI',
    link: 'https://mui.com/',
    icon: 'logos:material-ui',
    type: 'library',
    description:
      "Material UI is a popular React component library that implements Google's Material Design guidelines. It provides a set of pre-designed UI components for creating modern and visually appealing web interfaces.",
  },
  {
    id: '64cd01363807d13277294748',
    name: 'Quasar',
    link: 'https://quasar.dev/',
    icon: 'devicon:quasar',
    type: 'framework',
    description:
      'Quasar is a high-performance Vue.js framework that allows developers to build responsive single-page applications, server-side-rendered apps, and mobile applications using a unified codebase.',
  },
  {
    id: '64cd01363807d13277294749',
    name: 'Laravel',
    link: 'https://laravel.com/',
    icon: 'logos:laravel',
    type: 'framework',
    description:
      'Laravel is a PHP web application framework known for its elegant syntax and developer-friendly features. It provides tools and libraries for tasks like routing, database management, and authentication.',
  },
  {
    id: '64cd01363807d1327729474a',
    name: 'Codeigniter',
    link: 'https://codeigniter.com/',
    icon: 'logos:codeigniter-icon',
    type: 'framework',
    description:
      'CodeIgniter is a lightweight PHP framework that aims to simplify and speed up the development of web applications. It emphasizes a small footprint and high performance.',
  },
  {
    id: '64cd01363807d1327729474b',
    name: 'MySQL',
    link: 'https://www.mysql.com/',
    icon: 'logos:mysql',
    type: 'database',
    description:
      'MySQL is an open-source relational database management system. It is commonly used for storing and managing structured data in various types of applications.',
  },
  {
    id: '64cd01363807d1327729474c',
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
    icon: 'devicon:mongodb',
    type: 'database',
    description:
      'MongoDB is a popular NoSQL database that uses a flexible, document-based data model. It is designed for scalability and ease of development, especially for applications dealing with large amounts of unstructured or semi-structured data.',
  },
  {
    id: '64cd01363807d1327729474d',
    name: 'Git',
    link: 'https://git-scm.com/',
    icon: 'devicon:git',
    type: 'tool',
    description:
      'Git is a distributed version control system used to track changes in source code during software development. It enables collaboration, code review, and version management among developers.',
  },
  {
    id: '64cd01363807d1327729474e',
    name: 'Python',
    link: 'https://www.python.org/',
    icon: 'logos:python',
    type: 'language',
    description:
      'Python is a versatile and easy-to-read programming language known for its simplicity and readability. It is widely used for web development, data analysis, scientific computing, and more.',
  },
  {
    id: '64cd01363807d1327729474f',
    name: 'Socket.io',
    link: 'https://socket.io/',
    icon: 'devicon:socketio',
    type: 'library',
    description:
      'Socket.io is a JavaScript library that enables real-time, bidirectional communication between clients and servers. It is commonly used for building interactive features like chat applications and live updates.',
  },
  {
    id: '64cd01363807d13277294750',
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/docs/',
    icon: 'logos:typescript-icon',
    type: 'language',
    description:
      'TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity and code quality. It can be compiled to plain JavaScript for browser compatibility.',
  },
];

export default Skills;
