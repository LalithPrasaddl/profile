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
    title: 'Over 9 years',
    subTitle: 'Experience',
    icon: 'date_range'
  }, {
    title: 'Over 7 projects',
    subTitle: 'Completed',
    icon: 'school'
  }],
  professionalSkills: [{
    label: 'Javascript',
    exp: '9 years'
  }, {
    label: 'HTML & CSS3',
    exp: '9 years'
  }, {
    label: 'React JS',
    exp: '5.5 years'
  }, {
    label: 'Vue JS',
    exp: '2 years'
  }, {
    label: 'Angular JS',
    exp: '1.5 years'
  }, {
    label: 'Swift',
    exp: '1 year'
  }, {
    label: 'React Native',
    exp: '1.5 years'
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
      desc: 'A platform where users could upload files and attachments, upon save, would be given a link which could be shared with other users on a need basis.',
      duration: 'Oct 2014 - Nov 2015',
      responsibilities: [
        'Developed the website as per given design spces, making sure the same was responsive too.',
        'Integrate dropzone.js to upload multiple attachments.',
        'Work with server developers for proper and better uploads.',
        'Ensured to implement all the design changes that was provided across the development cycle.'
      ],
      skills: ['jQuery', 'Bootstrap', 'CSS3']
    }, {
      client: 'BeatsbyDre - Apple',
      desc: 'Beats Electronics LLC is an American consumer audio products manufacturer headquartered in Culver City, California.',
      duration: 'Dec 2015 - Sep 2016',
      responsibilities: [
        'Led a team of 5 members.',
        'Work with CMS to render all the diferent products and its images for the best user experience.',
        'Develop new webpages where the cilent could showcase their new and upcoming products',
        'Made sure the website was maintained and any bugs reported were resolved as soon as possible.'
      ],
      skills: ['jQuery', 'Bootstrap', 'CSS3', 'SCSS']
    }, {
      client: 'Apple On WeChat Platform - Apple',
      desc: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software and online services.',
      duration: 'Oct 2016 - Apr 2020',
      responsibilities: [
        'Led a team of 6 members.',
        'Develop mobile friendly website to showcase client products.',
        'Integrate weChat JS SDK for smoother payment and user friendly access within weChat.',
      ],
      skills: ['React JS', 'CSS3', 'SCSS']
    }, {
      client: 'Project 5 - Apple',
      desc: 'A platform where employees could find and book a conference room.',
      duration: 'May 2020 - till now',
      responsibilities: [
        'Led a team of 12 members.',
        'Work with client to finalize the design requirements and document the same.',
        'Work with team members to translate the finalized the design into proper structured code.',
        'Ensured the website is user friendly and responsive.'
      ],
      skills: ['Vue JS', 'CSS3', 'SCSS']
    }]
  }],
  selfProjects: [{
    client: 'Drink Water Tracker Reminder',
    desc: 'An App where users can track and set reminder to track the amount of water they drink on a daily basis.',
    skills: ['React Native']
  }, {
    client: 'Ding Health',
    desc: 'Ding Health is your pocket health assistant that helps you track symptoms, identify concerns and find affordable care you deserve.',
    skills: ['React Native']
  }]
}

export let appState = {
  currScreen: 'home'
}

export function updateAppState(data) {
  appState = data
}
