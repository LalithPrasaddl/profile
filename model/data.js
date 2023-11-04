const exp = new Date().getFullYear() - 2012;

export const siteData = {
  name: 'Lalith Prasad',
  location: 'Bangalore, India',
  aboutDesc: 'Passionate about learning and development with a desire to apply skills on a larger development team. Eager to tackle more complex problems and continue to find ways to maximize user efficiency. Capable of continuous learning from senior developers while still nurturing junior developers. Experience in driving projects forward as the development team leader, facilitating projects from concept to launch.',
  leftNavItems: [{
    label: 'Home',
    key: 'home',
    path: '/',
    icon: 'home'
  }, {
    label: 'About Me',
    key: 'about',
    path: '/about',
    icon: 'account_circle'
  }, {
    label: 'Employment',
    key: 'employment',
    path: '/employment',
    icon: 'work'
  }, {
    label: 'Projects',
    key: 'projects',
    path: '/projects',
    icon: 'assessment'
  }, {
    label: 'Contact',
    key: 'contact',
    path: '/contact',
    icon: 'phone'
  }],
  contact: [{
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/lalith-prasad-64560155/'
  }, {
    label: 'Twitter',
    link: 'https://twitter.com/lalithprasaddl'
  }, {
    label: 'Mail',
    link: 'mailto:lalithprasaddl@gmail.com'
  }],
  aboutItems: [{
    title: ['Over', exp ,'years'].join(' '),
    subTitle: 'Experience',
    icon: 'date_range'
  }, {
    title: 'Over 7 projects',
    subTitle: 'Completed',
    icon: 'school'
  }],
  professionalSkills: [{
    label: 'Javascript',
    exp: '10 years'
  }, {
    label: 'HTML & CSS3',
    exp: '10 years'
  }, {
    label: 'React JS',
    exp: '7 years'
  }, {
    label: 'Vue JS',
    exp: '3.5 years'
  }, {
    label: 'Angular JS',
    exp: '1.5 years'
  }, {
    label: 'Swift',
    exp: '1 year'
  }, {
    label: 'React Native',
    exp: '4.5 years'
  }],
  languages: [{
    label: 'English',
    exp: 'Fluent'
  }, {
    label: 'Hindi',
    exp: 'Fluent'
  }, {
    label: 'Kannada',
    exp: 'Fluent'
  }],
  hobbies: [{
    label: 'Play Football',
    exp: 'Play Football'
  }, {
    label: 'Watch Football',
    exp: 'Watch Football'
  }, {
    label: 'Play Chess',
    exp: 'Play Chess'
  }],
  companies: [{
    company: 'Infosys',
    desc: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.',
    duration: 'Sep 2012 - till now',
    role: 'Technology Lead',
    projects: [{
      client: 'Assa Abloy',
      desc: 'ABLOY is a hallmark of trust. Setting the global benchmark in advanced locking and access management systems.',
      duration: 'Sep 2013 - Sep 2014',
      responsibilities: [
        'Develop user friendly website where customers could easily navigate through client\'s various products.',
        'Ensure the website is responsive across all platforms.',
        'Played a major role in making sure the website can be published with different themes.'
      ],
      skills: ['jQuery', 'Bootstrap', 'CSS3']
    }, {
      client: 'Project 2 - Apple',
      desc: 'At the heart of this platform is the ability to seamlessly upload, preview, and securely share URLs with trusted recipients. Within the app, users can confidently upload their files and URLs, knowing that state-of-the-art encryption safeguards their information. The platform empowers users to preview uploaded content, ensuring its accuracy before sharing. Leveraging cutting-edge security protocols, the project enables users to selectively share these files and URLs with designated recipients, granting access only to those authorized.',
      duration: 'Oct 2014 - Nov 2015',
      responsibilities: [
        'Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.',
        'Integrate dropzone.js to upload multiple attachments.',
        'Ensured cross-browser compatibility and optimized the user experience for various devices.',
        'Conducted unit testing to validate individual components\' functionality and performance.',
        'Ensured to implement all the design changes that was provided across the development cycle.'
      ],
      skills: ['jQuery', 'Bootstrap', 'CSS3']
    }, {
      client: 'BeatsbyDre - Apple',
      desc: 'Step into a virtual haven where innovation meets audio excellence, as we bring you an immersive platform to explore and acquire the iconic Beats by Dre headphones. We\'ve meticulously curated a space that mirrors the sleek design and uncompromising audio quality of the headphones themselves. Dive into a dynamic user experience as you browse through our collection, each product meticulously showcased with stunning visuals and detailed specifications. From wireless over-ear headphones that envelop you in a symphony of sound to compact in-ear options that keep your music with you wherever you go, offers the ultimate destination for audiophiles and style enthusiasts alike. Join us in embracing the rhythm of innovation as we redefine the way you engage with Beats by Dre headphones through an intuitive, user-centric web experience.',
      duration: 'Dec 2015 - Sep 2016',
      responsibilities: [
        'Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.',
        'Worked with CMS to render all the diferent products and its images for the best user experience.',
        'Collaborated with UI/UX designers to translate wireframes and mockups into interactive web elements.',
        'Ensured cross-browser compatibility and optimized the user experience for various devices.',
        'Utilized version control systems (e.g., Git) to manage codebase changes and facilitate team collaboration.',
        'Conducted unit testing to validate individual components\' functionality and performance.',
        'Supported junior developers by providing guidance, code reviews, and technical assistance.',
        'Offered creative problem-solving skills to overcome challenges and meet project objectives.'
      ],
      skills: ['jQuery', 'Bootstrap', 'CSS3', 'SCSS']
    }, {
      client: 'Apple On WeChat Platform - Apple',
      desc: 'Users can immerse themselves in a seamless shopping experience where the world of innovative technology meets the convenience of China\'s most popular messaging app. One can explore and purchase a wide array of cutting-edge Apple products right at your fingertips. From the latest iPhone models to sleek MacBooks, iPad tablets, and a plethora of accessories, our platform offers a curated selection of premium offerings. Embrace the future with confidence as you navigate through product details, reviews, and personalized recommendations, all within the familiar WeChat environment. Elevate your shopping journey and bring home the excellence of Apple innovation on WeChat.',
      duration: 'Oct 2016 - Apr 2020',
      responsibilities: [
        'Spearheaded the architectural design of the application, defining its overall structure, components, and interactions.',
        'Leveraged in-depth technical expertise to make critical decisions regarding technology stack, frameworks, and design patterns.',
        'Collaborated with team members to ensure a clear understanding of the architecture, fostering alignment and coherence throughout development.',
        'Designed and implemented complex modules or components, showcasing an ability to translate architectural concepts into practical solutions.',
        'Worked closely with cross-functional teams to ensure seamless integration of different parts of the application, promoting consistency and reliability.',
        'Mentored and guided junior developers, imparting architectural knowledge and best practices to enhance the overall development team\'s skills.',
        'Led code reviews, enforcing coding standards, optimizing performance, and identifying areas for improvement.',
        'Played a pivotal role in troubleshooting and resolving intricate technical challenges, demonstrating problem-solving skills and adaptability.',
        'Collaborated with product managers and designers to understand user requirements and translate them into efficient and scalable technical solutions.',
        'Balanced the dual role of a lead developer and team lead, effectively prioritizing tasks, managing resources, and ensuring project success.',
      ],
      skills: ['React JS', 'CSS3', 'SCSS']
    }, {
      client: 'Project 5 - Apple',
      desc: 'This project is a comprehensive solution designed to streamline office operations and enhance workplace convenience. Users can effortlessly locate and reserve available conference rooms, ensuring that meetings are efficiently scheduled. Additionally, the platform simplifies the process of requesting nameplates and badges, fostering a seamless onboarding experience for new team members and visitors. As a unique feature, the project also offers a captivating showcase of the company\'s diverse portfolio of buildings and stores, allowing users to explore and learn about each location\'s distinct features and amenities. By integrating these essential functionalities into one user-friendly interface, the project redefines how employees interact with their workspace, optimizing productivity and engagement in the modern office environment.',
      duration: 'May 2020 - till now',
      responsibilities: [
        'Collaborated closely with the client to understand project requirements, objectives, and desired outcomes.',
        'Led a multidisciplinary team throughout the project lifecycle, ensuring effective communication and coordination.',
        'Conducted thorough requirement gathering sessions to define project scope, functionality, and user expectations.',
        'Facilitated brainstorming sessions to finalize the project\'s architecture, technology stack, and design approach.',
        'Assigned tasks and responsibilities to team members based on their strengths and expertise, fostering a collaborative work environment.',
        'Managed client expectations by providing regular updates on project progress, addressing queries, and incorporating feedback.',
        'Oversaw the implementation of key features, ensuring adherence to coding standards, best practices, and quality assurance.',
        'Coordinated user acceptance testing (UAT) with the client to validate the application\'s functionality, usability, and performance.',
        'Led the resolution of technical challenges and issues, collaborating with the team to find creative solutions.',
        'Demonstrated exceptional problem-solving skills, addressing last-minute changes and adjustments to meet client requirements.',
        'Successfully delivered a high-quality web application that met the client\'s expectations, contributing to improved user experience and business outcomes.',
        'Utilized version control systems (e.g., Git) to manage codebase changes and facilitate team collaboration.',
      ],
      skills: ['Vue JS', 'CSS3', 'SCSS']
    }]
  }],
  selfProjects: [{
    client: 'Scissor Rock Paper',
    desc: 'Rock Paper Scissors Showdown brings the classic game to your fingertips with a fresh new look and exciting gameplay. Prepare to engage in thrilling battles of mind games as you outsmart the system and rise to victory!',
    skills: ['React Native'],
    links: [{
      title: 'iOS',
      link: 'https://apps.apple.com/in/app/scissor-rock-paper/id6462812988'
    }, {
      title: 'Andriod',
      link: 'https://play.google.com/store/apps/details?id=com.lalithprasaddl.scissorrockpaper'
    }]
  }, {
    client: 'AI Movie Buddy',
    desc: 'Experience the magic of cinema in a whole new way with AI Movie Buddy. Unleash your imagination as you engage in conversations with legendary movie characters, brought to life through advanced AI technology.',
    skills: ['React Native', 'OpenAI', 'Firebase'],
    links: [{
      title: 'iOS',
      link: 'https://apps.apple.com/in/app/ai-movie-buddy/id6462828685'
    }, {
      title: 'Andriod',
      link: 'https://play.google.com/store/apps/details?id=com.lalithprasaddl.filmyavatarchat'
    }],
  }]
}

export let appState = {
  currScreen: 'home'
}

export function updateAppState(data) {
  appState = data
}
