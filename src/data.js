export const stackFrontEnd = [
  {
    text: 'JavaScript (Es6+)',
    src: 'javascript.png',
  },
  {
    text: 'jQuery',
    src: 'jquery.png',
  },
  {
    text: 'React',
    src: 'react.png',
  },
  {
    text: 'Vue.js *',
    src: 'vue.png',
  },
  {
    text: 'Apollo Client *',
    src: 'apollo-client.png',
  },
  {
    text: 'Next.js *',
    src: 'next-js.png',
  },
  {
    text: 'GatsbyJS *',
    src: 'gatsby-js.png',
  },
  {
    text: 'Styled Components',
    src: 'styled-components.png',
  },
  {
    text: 'GraphQL *',
    src: 'graphql.png',
  },
  {
    text: 'CSS3',
    src: 'css3.png',
  },
  {
    text: 'Sass',
    src: 'sass.png',
  },
  {
    text: 'CSS Grid',
    src: 'css-grid.png',
  },
  {
    text: 'Flexbox',
    src: 'flexbox.png',
  },
  {
    text: 'Bootstrap',
    src: 'bootstrap.png',
  },
];

export const stackBackEnd = [
  {
    text: '.NET Framework',
    src: 'net-framework.png',
  },
  {
    text: '.NET Core',
    src: 'net-core.png',
  },
  {
    text: 'C#',
    src: 'c-sharp.png',
  },
  {
    text: 'Express.js *',
    src: 'express-js.png',
  },
  {
    text: 'Prisma *',
    src: 'prisma.png',
  },
  {
    text: 'GraphQL Yoga *',
    src: 'graphql-yoga.png',
  },
];

export const stackDatabase = [
  {
    text: 'SQL Server',
    src: 'sql-server.png',
  },
  {
    text: 'SQL',
    src: 'sql.png',
  },
  {
    text: 'T-SQL',
    src: 't-sql.png',
  },
];

export const stackOther = [
  {
    text: 'Webpack',
    src: 'webpack.png',
  },
  {
    text: 'npm',
    src: 'npm.png',
  },
  {
    text: 'Yarn',
    src: 'yarn.png',
  },
  {
    text: 'Git',
    src: 'git.png',
  },
  {
    text: 'GitHub',
    src: 'github.png',
  },
];

export const portfolio = [
  {
    project: 'OmniTrack',
    stack:
      '.NET Framework | C# | SQL Server | Stored Procedures | T SQL | jQuery | Razor Pages | Bootstrap | Less',
    description:
      'Event management software used by Region One ESC and teachers from 27 school districts throughout South Texas. This software was developed to help educators keep track of their professional development hours required by the State of Texas as well as for education administrators to create and manage the entire lifecycle of a workshop, including the management of meeting rooms, registrations, certification assignment, online check-ins for participants, among many other features.|This is a multi-tenant SaaS application where each tenant (organization) has users belonging to their respective tenant.|I collaborated with another engineer in migrating the software from the older ASP.NET Web Forms to the newer (at that time) ASP.NET MVC -- .NET Framework. While migrating the software, we adapted it to support multi-tenancy (SaaS model) and added many new features and enhancements.',
    images: ['OmniTrack1.png', 'OmniTrack2.png', 'OmniTrack3.png'],
  },
  {
    project: 'Video Conference Request Platform',
    stack:
      '.NET Core | C# | SQL Server | T SQL | Stored Procedures | Vue.js | jQuery | Razor Pages | Bulma (CSS Framework) | Sass',
    description:
      'Region One ESC was in need of a solution to automate a manual process to schedule video conferences. I developed a solution to meet this need. The platform allows school administrators to request video conferences from Region One ESC through a simple interface.|In the back-end I implemented an algorithm that connects to the Zoom API to create and schedule Zoom meetings. The requestor then gets an email with the video conference details including a direct link to the Zoom meeting for the video session. For Region One staff I display all of the scheduled video conferences through a custom calendar view. Other integrations include Google Calendar API and OmniTrack.|I did the complete design of the system including database, back-end and front-end, as well as development.',
    images: ['VideoConference1.png', 'VideoConference2.png'],
  },
  {
    project: 'Print Shop Ordering System',
    stack:
      '.NET Core | C# | Web API | SQL Server | T SQL | Stored Procedures | React | Redux | React Router | CSS Grid | Pure CSS | Sass',
    description:
      'The Region One ESC Print Shop department needed a complete re-write of the system they were using based on Microsoft Access. I developed a modern web based solution to meet their need.|The system allows them to input their orders and instantly get a quote regarding the total price for the particular order. In an easy-to-use interface I give them all of the services they offer, then they choose the specific services for an order and in the client app code I take care of all the calculations for the final price.|I did the complete design of the system including database, back-end and front-end, as well as development.',
    images: ['PrintShop1.png'],
  },
  {
    project: 'EsauSilva.dev',
    stack: 'React | GatsbyJS | Styled Components | CSS Grid | Flexbox',
    description:
      'Portfolio website to showcase my work as a full-stack software engineer and to gain experience in GatsbyJS.|I did the complete design of the site as well as development.',
    images: ['EsauSilva1.png', 'EsauSilva2.png'],
  },
  {
    project: 'Muñoz Photography',
    stack:
      '.NET Core | C# | Web API | SQL Server | T SQL | Stored Procedures | React | jQuery | Razor Pages | Bootstrap | Flexbox | Sass',
    description:
      'The website is composed of three different sections. The first section is a static marketing site with different pages, including a contact form page.|The second section is the administration area. Through this section the business owner is able to upload photo sessions for his clients, manage the uploaded photos, manage photo orders and mark them as either paid and/or fulfilled, and manage the different order packages he offers.|The third section is a photo gallery application built with React. This is where clients search for their uploaded photos by their client ID, browse through their photos, and place orders. Clients receive an email with their selected photos and the owner also receives an email notification of the submitted order.|I did the complete design of the system including database, back-end and front-end, as well as development.',
    images: [
      'MunozPhoto1.png',
      'MunozPhoto2.png',
      'MunozPhoto3.png',
      'MunozPhoto4.png',
      'MunozPhoto5.png',
      'MunozPhoto6.png',
    ],
  },
  {
    project: 'OmniSecure Assessment Tool',
    stack:
      '.NET Core | C# | SQL Server | T SQL | Stored Procedures | jQuery | Razor Pages | Bootstrap | Sass',
    description:
      'The State of Texas follows the Texas Cybersecurity Framework which provides computer security guidance to determine cybersecurity risks. Education institutions are required by the Texas Education Agency (TEA) to comply with the 40 security objectives that are part of the cybersecurity framework.|In collaboration with Region One ESC Information Security Officer, we developed a self-assessment system for Region One ESC and school districts to self-assess and keep track of the said security objectives regarding their respective state of compliance.|This is a multi-tenant SaaS application where each tenant (organization) has users belonging to their respective tenant.|I did the complete design of the system including database, back-end and front-end, as well as development.',
    images: ['OmniSecure1.png', 'OmniSecure2.png', 'OmniSecure3.png'],
  },
  {
    project: 'Gear Up Alumni Management System',
    stack:
      '.NET Core | C# | SQL Server | T SQL | Stored Procedures | jQuery | Razor Pages | Bootstrap | Sass',
    description:
      'The Gear Up department at Region One ESC was needing a way to follow up with Gear Up alumni after graduating from High School (HS). I developed a system where Gear Up alumni would create a profile following a series of questions regarding their current state after graduation, whether they enrolled in college or the military, if they need financial assistance, and contact details among other information.|After creating their profile, Gear Up staff at Region One ESC would get a notification indicating their profile completion so they can follow up with the alumn. Different staff would get the notification according to their assigned high school (i.e. If student A graduated from HS X, then staff B would get the notification. If student B graduated from HS Y, then staff C would get the notification).|Administration screens are also provided where staff can run reports on profiles created.|I did the complete design of the system including database, back-end and front-end, as well as development.',
    images: ['GearUpAlumni1.png', 'GearUpAlumni2.png', 'GearUpAlumni3.png'],
  },
];

export const wip = [
  {
    project: 'My Quite Time - A Prayer Journal',
    stack:
      'React | Next.js | Apollo Client | Styled Components | CSS Grid | GraphQL | Prisma | GraphQL Yoga | MySQL',
    description:
      'I am currently working on a personal project I have been wanting to do for a long time. This application will have a SaaS model and is a journal to keep track of prayers. The user will be able to create different sections to organize prayers. Within each section, they can create different categories where they can add the prayers. There will be two kinds of prayers: Requests and Blessings and each prayer consists of a title and a description.|I will also give them the ability to mark each prayer as answered. Once it is marked as answered, then the prayer will move to an Answered section. Each Prayer and Section will be editable and can be deleted as well.|I am doing the complete design of the application including database, back-end and front-end, as well as development.',
    images: ['MQT1.png', 'MQT2.png', 'MQT3.png', 'MQT4.png'],
  },
];

export const openSource = [
  {
    project: 'EsauSilva.dev',
    stack: 'React | GatsbyJS | Styled Components | CSS Grid | Flexbox',
    description:
      'Portfolio website to showcase my work as a full-stack software engineer and to gain experience in GatsbyJS.',
    link: 'https://github.com/esausilva/esausilva-dev',
  },
  {
    project: 'react-starter-boilerplate-hmr',
    stack: 'React | Webpack | React Router | Semantic UI',
    description:
      'React Starter Boilerplate with Hot Module Replacement and Webpack 4.',
    link: 'https://github.com/esausilva/react-starter-boilerplate-hmr',
  },
  {
    project: 'FullCalendar .NET Core',
    stack: '.NET Core | SQL Server | SQL | jQuery | Webpack | Sass',
    description:
      'The project includes the implementation of FullCalendar in JavaScript ES6+ and comes wired with the necessary database access layer (including SQL statements) to interact with SQL Server.',
    link: 'https://github.com/esausilva/fullcalendar-aspnet-core',
  },
  {
    project: 'Getting Started with Vue.js in .NET Core',
    stack: '.NET Core | Vue.js | Webpack | Sass',
    description:
      'This is the project source files for my tutorial on using Vue.js with .NET Core and Razor Pages.',
    link: 'https://github.com/esausilva/vuejs-aspnet-core',
  },
  {
    project: 'Compile Sass Files in Visual Studio and Webpack',
    stack: '.NET Core | Webpack | Sass',
    description:
      '.NET Core MVC base project with support for Sass using Webpack that includes minification and autoprefixing CSS for production.',
    link: 'https://github.com/esausilva/netcore-sass-webpack',
  },
  {
    project:
      'Character, Word, Sentence and Paragraph Counter in Vanilla JavaScript and React',
    stack: 'React | VanillaJS',
    description:
      'Counts characters, words, sentences and paragraphs in a given text, written in Vanilla JavaScript (ES6+) and React.',
    link:
      'https://github.com/esausilva/character-word-sentence-paragraph-counter',
  },
  {
    project: 'jQuery.SelectListActions',
    stack: 'jQuery',
    description:
      'jQuery plugin that gives you several actions to perform with Select lists.',
    link: 'https://github.com/esausilva/jquery.selectlistactions.js',
  },
  {
    project: 'React Production Deployment',
    stack: 'React | Heroku | Netlify | Now.sh',
    description:
      'The repo contains examples on how to deploy your React application to Netlify, Now and Heroku.',
    link: 'https://github.com/esausilva/react-production-deployment',
  },
];

export const blogEntires = {
  esausilva: [
    {
      title: 'Compile Sass Files in Visual Studio and Webpack',
      url:
        'https://esausilva.com/2018/08/30/compile-sass-files-visual-studio-webpack/',
    },
    {
      title: 'Char, Word, Sentence and Paragraph Counter JavaScript and React',
      url:
        'https://esausilva.com/2017/08/26/character-word-sentence-paragraph-counter-in-vanilla-javascript-and-react/',
    },
    {
      title: 'Quickly Set Up a Node ExpressJS Server to Serve a Static Site',
      url:
        'https://esausilva.com/2017/05/18/quickly-set-up-a-node-expressjs-server-to-serve-a-static-site/',
    },
    {
      title:
        'Calling Instructure Canvas LMS API in C# ASP.NET MVC Using RestSharp',
      url:
        'https://esausilva.com/2017/02/14/calling-instructure-canvas-lms-api-in-c-sharp-asp-net-mvc-using-restsharp/',
    },
  ],
  medium: [
    {
      title: 'Getting Started with Vue.js in .NET Core using Visual Studio',
      url:
        'https://blog.bitsrc.io/getting-started-with-vue-js-in-net-core-using-visual-studio-efbb43703630',
    },
    {
      title: 'How to use Webpack with React: an in-depth tutorial',
      url:
        'https://medium.com/free-code-camp/learn-webpack-for-react-a36d4cac5060',
    },
    {
      title: 'How to get create-react-app to work with a Node.js back-end API',
      url:
        'https://medium.com/free-code-camp/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0',
    },
    {
      title: 'React OAuth Authentication with Firebase',
      url:
        'https://blog.bitsrc.io/react-oauth-authentication-with-firebase-dfe0e8c5d0d4',
    },
  ],
  upcoming: [
    {
      title: 'Adding a React app to an existing .NET Core MVC app',
      description: '',
    },
    {
      title: 'Authentication and Authorization in .NET Core',
      description:
        'Will include Roles, Policies, Claims, View-Based Authorization',
    },
  ],
};
