var E=Object.defineProperty;var v=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&b(e,n,t[n]);if(v)for(var n of v(t))M.call(t,n)&&b(e,n,t[n]);return e};const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};T();function x(e,t){if(!e)return null;var n=document.createElement(e);if(e==="img")H(n,t);else if(t&&Object.keys(t).length>0)for(var i=Object.keys(t),s=0;s<i.length;s++){var a=i[s];a==="style"?w(n,t[a]):a==="className"?m(n,t[a]):a.indexOf("data-")>-1?n.setAttribute(a,t[a]):n[a]=t[a]}return n}function m(e,t){var n=typeof t;if(n==="string")e.classList.add(t);else if(Array.isArray(t)&&t.length>0)for(var i=0;i<t.length;i++){var s=t[i];e.classList.add(s)}}function I(e,t){var n=typeof t;if(n==="string")e.classList.remove(t);else if(Array.isArray(t)&&t.length>0)for(var i=0;i<t.length;i++){var s=t[i];e.classList.remove(s)}}function w(e,t){if(!e)return null;if(t&&Object.keys(t).length>0)for(var n=Object.keys(t),i=0;i<n.length;i++){var s=n[i];e.style[s]=t[s]}}function f(e){if(!e.type)return null;var t=x(e.type,e.elmAttrs);if(e.elmAttrs&&e.elmAttrs.id){var n=document.getElementById(e.elmAttrs.id);n&&(n.innerHTML="",t=n)}if(e.childElms)for(var i=0;i<e.childElms.length;i++){var s=e.childElms[i];if(s.onlyAppend)t.append(s.content);else{var a=f(s);t.append(a)}}return t}function H(e,t){if(!e)return null;var n=null,i=null,s=t.src,a=t.imageObject;a&&a.imageURL?(n=a.imageURL,i=a.darkURL,n===i&&(i=i+"&bgc=0,0,0")):s&&(n=s,i=s);var c=A();if(s=c?i:n,i&&e.setAttribute("data-darksrc",i),n&&e.setAttribute("data-lightsrc",n),s&&(e.src=s),m(e,"opacityZero"),e.onload=function(h){I(e,"opacityZero")},t&&Object.keys(t).length>0)for(var p=Object.keys(t),u=["src","imageObject"],l=0;l<p.length;l++){var o=p[l];u.indexOf(o)===-1&&(o==="style"?w(e,t[o]):o==="className"?m(e,t[o]):o.indexOf("data-")>-1?e.setAttribute(o,t[o]):e[o]=t[o])}}function A(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function C(){var e=document.getElementsByTagName("img"),t=A();if(e&&e.length>0)for(var n=0;n<e.length;n++){var i=e[n],s=i.dataset;t?s.darksrc&&(m(i,"opacityZero"),i.src=s.darksrc):s.lightsrc&&(m(i,"opacityZero"),i.src=s.lightsrc)}}window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){setTimeout(function(){C()},100)});const O=new Date().getFullYear()-2012,r={name:"Lalith Prasad",location:"Bangalore, India",aboutDesc:"Passionate about learning and development with a desire to apply skills on a larger development team. Eager to tackle more complex problems and continue to find ways to maximize user efficiency. Capable of continuous learning from senior developers while still nurturing junior developers. Experience in driving projects forward as the development team leader, facilitating projects from concept to launch.",leftNavItems:[{label:"Home",key:"home",path:"/",icon:"home"},{label:"About Me",key:"about",path:"/about",icon:"account_circle"},{label:"Employment",key:"employment",path:"/employment",icon:"work"},{label:"Projects",key:"projects",path:"/projects",icon:"assessment"},{label:"Contact",key:"contact",path:"/contact",icon:"phone"}],contact:[{label:"Linkedin",link:"https://www.linkedin.com/in/lalith-prasad-64560155/"},{label:"Twitter",link:"https://twitter.com/lalithprasaddl"},{label:"Mail",link:"mailto:lalithprasaddl@gmail.com"}],aboutItems:[{title:["Over",O,"years"].join(" "),subTitle:"Experience",icon:"date_range"},{title:"Over 7 projects",subTitle:"Completed",icon:"school"}],professionalSkills:[{label:"Javascript",exp:"10 years"},{label:"HTML & CSS3",exp:"10 years"},{label:"React JS",exp:"7 years"},{label:"Vue JS",exp:"3.5 years"},{label:"Angular JS",exp:"1.5 years"},{label:"Swift",exp:"1 year"},{label:"React Native",exp:"4.5 years"}],languages:[{label:"English",exp:"Fluent"},{label:"Hindi",exp:"Fluent"},{label:"Kannada",exp:"Fluent"}],hobbies:[{label:"Play Football",exp:"Play Football"},{label:"Watch Football",exp:"Watch Football"},{label:"Play Chess",exp:"Play Chess"}],companies:[{company:"Infosys",desc:"Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.",duration:"Sep 2012 - till now",role:"Technology Lead",projects:[{client:"Assa Abloy",desc:"ABLOY is a hallmark of trust. Setting the global benchmark in advanced locking and access management systems.",duration:"Sep 2013 - Sep 2014",responsibilities:["Develop user friendly website where customers could easily navigate through client's various products.","Ensure the website is responsive across all platforms.","Played a major role in making sure the website can be published with different themes."],skills:["jQuery","Bootstrap","CSS3"]},{client:"Project 2 - Apple",desc:"At the heart of this platform is the ability to seamlessly upload, preview, and securely share URLs with trusted recipients. Within the app, users can confidently upload their files and URLs, knowing that state-of-the-art encryption safeguards their information. The platform empowers users to preview uploaded content, ensuring its accuracy before sharing. Leveraging cutting-edge security protocols, the project enables users to selectively share these files and URLs with designated recipients, granting access only to those authorized.",duration:"Oct 2014 - Nov 2015",responsibilities:["Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.","Integrate dropzone.js to upload multiple attachments.","Ensured cross-browser compatibility and optimized the user experience for various devices.","Conducted unit testing to validate individual components' functionality and performance.","Ensured to implement all the design changes that was provided across the development cycle."],skills:["jQuery","Bootstrap","CSS3"]},{client:"BeatsbyDre - Apple",desc:"Step into a virtual haven where innovation meets audio excellence, as we bring you an immersive platform to explore and acquire the iconic Beats by Dre headphones. We've meticulously curated a space that mirrors the sleek design and uncompromising audio quality of the headphones themselves. Dive into a dynamic user experience as you browse through our collection, each product meticulously showcased with stunning visuals and detailed specifications. From wireless over-ear headphones that envelop you in a symphony of sound to compact in-ear options that keep your music with you wherever you go, offers the ultimate destination for audiophiles and style enthusiasts alike. Join us in embracing the rhythm of innovation as we redefine the way you engage with Beats by Dre headphones through an intuitive, user-centric web experience.",duration:"Dec 2015 - Sep 2016",responsibilities:["Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.","Worked with CMS to render all the diferent products and its images for the best user experience.","Collaborated with UI/UX designers to translate wireframes and mockups into interactive web elements.","Ensured cross-browser compatibility and optimized the user experience for various devices.","Utilized version control systems (e.g., Git) to manage codebase changes and facilitate team collaboration.","Conducted unit testing to validate individual components' functionality and performance.","Supported junior developers by providing guidance, code reviews, and technical assistance.","Offered creative problem-solving skills to overcome challenges and meet project objectives."],skills:["jQuery","Bootstrap","CSS3","SCSS"]},{client:"Apple On WeChat Platform - Apple",desc:"Users can immerse themselves in a seamless shopping experience where the world of innovative technology meets the convenience of China's most popular messaging app. One can explore and purchase a wide array of cutting-edge Apple products right at your fingertips. From the latest iPhone models to sleek MacBooks, iPad tablets, and a plethora of accessories, our platform offers a curated selection of premium offerings. Embrace the future with confidence as you navigate through product details, reviews, and personalized recommendations, all within the familiar WeChat environment. Elevate your shopping journey and bring home the excellence of Apple innovation on WeChat.",duration:"Oct 2016 - Apr 2020",responsibilities:["Spearheaded the architectural design of the application, defining its overall structure, components, and interactions.","Leveraged in-depth technical expertise to make critical decisions regarding technology stack, frameworks, and design patterns.","Collaborated with team members to ensure a clear understanding of the architecture, fostering alignment and coherence throughout development.","Designed and implemented complex modules or components, showcasing an ability to translate architectural concepts into practical solutions.","Worked closely with cross-functional teams to ensure seamless integration of different parts of the application, promoting consistency and reliability.","Mentored and guided junior developers, imparting architectural knowledge and best practices to enhance the overall development team's skills.","Led code reviews, enforcing coding standards, optimizing performance, and identifying areas for improvement.","Played a pivotal role in troubleshooting and resolving intricate technical challenges, demonstrating problem-solving skills and adaptability.","Collaborated with product managers and designers to understand user requirements and translate them into efficient and scalable technical solutions.","Balanced the dual role of a lead developer and team lead, effectively prioritizing tasks, managing resources, and ensuring project success."],skills:["React JS","CSS3","SCSS"]},{client:"Project 5 - Apple",desc:"This project is a comprehensive solution designed to streamline office operations and enhance workplace convenience. Users can effortlessly locate and reserve available conference rooms, ensuring that meetings are efficiently scheduled. Additionally, the platform simplifies the process of requesting nameplates and badges, fostering a seamless onboarding experience for new team members and visitors. As a unique feature, the project also offers a captivating showcase of the company's diverse portfolio of buildings and stores, allowing users to explore and learn about each location's distinct features and amenities. By integrating these essential functionalities into one user-friendly interface, the project redefines how employees interact with their workspace, optimizing productivity and engagement in the modern office environment.",duration:"May 2020 - till now",responsibilities:["Collaborated closely with the client to understand project requirements, objectives, and desired outcomes.","Led a multidisciplinary team throughout the project lifecycle, ensuring effective communication and coordination.","Conducted thorough requirement gathering sessions to define project scope, functionality, and user expectations.","Facilitated brainstorming sessions to finalize the project's architecture, technology stack, and design approach.","Assigned tasks and responsibilities to team members based on their strengths and expertise, fostering a collaborative work environment.","Managed client expectations by providing regular updates on project progress, addressing queries, and incorporating feedback.","Oversaw the implementation of key features, ensuring adherence to coding standards, best practices, and quality assurance.","Coordinated user acceptance testing (UAT) with the client to validate the application's functionality, usability, and performance.","Led the resolution of technical challenges and issues, collaborating with the team to find creative solutions.","Demonstrated exceptional problem-solving skills, addressing last-minute changes and adjustments to meet client requirements.","Successfully delivered a high-quality web application that met the client's expectations, contributing to improved user experience and business outcomes.","Utilized version control systems (e.g., Git) to manage codebase changes and facilitate team collaboration."],skills:["Vue JS","CSS3","SCSS"]}]}],selfProjects:[{client:"Scissor Rock Paper",desc:"Rock Paper Scissors Showdown brings the classic game to your fingertips with a fresh new look and exciting gameplay. Prepare to engage in thrilling battles of mind games as you outsmart the system and rise to victory!",skills:["React Native"],links:[{title:"iOS",link:"https://apps.apple.com/in/app/scissor-rock-paper/id6462812988"},{title:"Andriod",link:"https://play.google.com/store/apps/details?id=com.lalithprasaddl.scissorrockpaper"}]},{client:"AI Movie Buddy",desc:"Experience the magic of cinema in a whole new way with AI Movie Buddy. Unleash your imagination as you engage in conversations with legendary movie characters, brought to life through advanced AI technology.",skills:["React Native","OpenAI","Firebase"],links:[{title:"iOS",link:"https://apps.apple.com/in/app/ai-movie-buddy/id6462828685"},{title:"Andriod",link:"https://play.google.com/store/apps/details?id=com.lalithprasaddl.filmyavatarchat"}]}]};let d={currScreen:"home"};function P(e){d=e}function L(){let e=D();return d.currScreen==="about"?e=B():d.currScreen==="contact"?e=R():d.currScreen==="employment"?e=q():d.currScreen==="projects"&&(e=z()),f({type:"div",elmAttrs:{className:"right-nav",id:"right-nav"},childElms:[e]})}function D(){return{type:"div",elmAttrs:{className:"home-wrapper"},childElms:[{type:"div",elmAttrs:{className:"home-wrapper-items"},childElms:[{type:"h1",elmAttrs:{className:"title",innerHTML:"Hello, I'm "+r.name}},{type:"h3",elmAttrs:{className:"sub-title",innerHTML:"Web Developer"}}]}]}}function B(){const e=U(),t=y("Professional Skills",r.professionalSkills),n=y("Languages Known",r.languages),i=F(),s=y("Hobbies",r.hobbies);return{type:"div",elmAttrs:{className:"about-wrapper"},childElms:[{type:"div",elmAttrs:{className:"section-title-wrapper"},childElms:[{type:"span",elmAttrs:{className:"section-title",innerHTML:"About Me"}}]},e,t,n,i,s]}}function U(){const e=[];for(let t=0;t<r.aboutItems.length;t++){const n=r.aboutItems[t];e.push({type:"div",elmAttrs:{className:"about-info-item"},childElms:[{type:"div",childElms:[{type:"span",elmAttrs:{className:"material-icons",innerHTML:n.icon}}]},{type:"div",elmAttrs:{className:"about-info-item-dets"},childElms:[{type:"div",elmAttrs:{innerHTML:n.title}},{type:"div",elmAttrs:{innerHTML:n.subTitle}}]}]})}return{type:"div",elmAttrs:{className:"about-info"},childElms:[{type:"h4",elmAttrs:{innerHTML:r.name,className:"about-info-name"}},{type:"div",elmAttrs:{innerHTML:r.location,className:"about-info-location"}},{type:"div",elmAttrs:{innerHTML:r.aboutDesc,className:"about-info-desc"}},{type:"div",elmAttrs:{className:"about-info-items"},childElms:e}]}}function y(e,t){const n=[];for(let i=0;i<t.length;i++){const s=t[i];n.push({type:"div",elmAttrs:{className:"prof-skill-item"},childElms:[{type:"div",elmAttrs:{innerHTML:s.label}},{type:"div",elmAttrs:{className:"exp",innerHTML:s.exp}}]})}return{type:"div",elmAttrs:{className:"prof-skills"},childElms:[{type:"h4",elmAttrs:{className:"about-section-title"},childElms:[{type:"span",elmAttrs:{innerHTML:e}}]},{type:"div",elmAttrs:{className:"prof-skill-items"},childElms:n}]}}function F(){return{type:"div",elmAttrs:{className:"prof-skills"},childElms:[{type:"h4",elmAttrs:{className:"about-section-title"},childElms:[{type:"span",elmAttrs:{innerHTML:"My Education"}}]},{type:"div",elmAttrs:{innerHTML:"Bachelor of Engineering, 2012",className:"education-title"}},{type:"div",elmAttrs:{innerHTML:"M S Ramaiah Institute of Technology"}},{type:"div",elmAttrs:{innerHTML:"Bangalore, India"}}]}}function R(){const e=[];for(let t=0;t<r.contact.length;t++){const n=r.contact[t];e.push({type:"a",elmAttrs:{innerHTML:n.label,href:n.link,target:"_blank"}})}return{type:"div",elmAttrs:{className:"contact-wrapper"},childElms:[{type:"div",elmAttrs:{className:"contact-wrapper-section"},childElms:[{type:"div",childElms:[{type:"h1",elmAttrs:{innerHTML:"Contact"}},{type:"div",elmAttrs:{className:"contact-items"},childElms:e}]}]}]}}function q(){const e=[];for(let t=0;t<r.companies.length;t++){const n=r.companies[t],i=N(n.projects.reverse()),s={type:"div",elmAttrs:{className:"company-wrapper"},childElms:[{type:"div",elmAttrs:{innerHTML:n.duration,className:"company-duration"}},{type:"h3",elmAttrs:{innerHTML:n.role?[n.company,n.role].join(", "):n.company}},{type:"div",elmAttrs:{innerHTML:n.desc}}]};i.length>0&&s.childElms.push({type:"div",childElms:i}),e.push(s)}return{type:"div",elmAttrs:{className:"carrer-wrapper"},childElms:[{type:"div",elmAttrs:{className:"section-title-wrapper"},childElms:[{type:"span",elmAttrs:{className:"section-title",innerHTML:"Employment"}}]},...e]}}function N(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n],s=i.responsibilities||[],a=[];for(let l=0;l<s.length;l++){const o=s[l];a.push({type:"li",elmAttrs:{innerHTML:o}})}const c=i.skills,p=[];for(let l=0;l<c.length;l++){const o=c[l];p.push({type:"div",elmAttrs:{className:"project-skill",innerHTML:o}})}let u=[{type:"div",elmAttrs:{className:"project-title"},childElms:[{type:"div",elmAttrs:{innerHTML:n+1}},{type:"h4",elmAttrs:{innerHTML:i.duration?[i.client,i.duration].join(", "):i.client}}]},{type:"div",elmAttrs:{innerHTML:i.desc}},{type:"ul",childElms:a},{type:"div",elmAttrs:{className:"project-skills-wrapper"},childElms:p}];if(i.links){const l=i.links,o=[];for(let h=0;h<l.length;h++){const g=l[h];o.push({type:"a",elmAttrs:{className:"project-link",innerHTML:g.title,href:g.link}})}u.push({type:"div",elmAttrs:{className:"project-links-wrapper"},childElms:o})}t.push({type:"div",elmAttrs:{className:"project"},childElms:u})}return t}function z(){const e=N(r.selfProjects.reverse());return{type:"div",elmAttrs:{className:"projects-wrapper"},childElms:[{type:"div",elmAttrs:{className:"section-title-wrapper"},childElms:[{type:"span",elmAttrs:{className:"section-title",innerHTML:"Projects"}}]},...e]}}function S(){const e=[],t=r.leftNavItems;for(let s=0;s<t.length;s++){const a=t[s],c=d.currScreen==a.key?"selected":"button";e.push({type:"button",elmAttrs:{className:c,"data-key":a.key,onclick:Z},childElms:[{type:"span",elmAttrs:{className:"material-icons",innerHTML:a.icon}},{type:"span",elmAttrs:{innerHTML:a.label}}]})}return f({type:"div",elmAttrs:{className:"left-nav",id:"left-nav"},childElms:[{type:"div",elmAttrs:{className:"image-wrapper"},childElms:[{type:"img",elmAttrs:{src:"./assets/profile1.jpg"}}]},{type:"div",elmAttrs:{className:"nav-items"},childElms:e}]})}function W(){return f({type:"button",elmAttrs:{className:"menu-btn"},childElms:[{type:"span",elmAttrs:{className:"material-icons",innerHTML:"menu",onclick:J}}]})}function J(){const e=document.body;e.classList.value.indexOf("menu-active")>-1?e.classList.remove("menu-active"):e.classList.add("menu-active")}function Z(e){const t=document.body,n=e.currentTarget.dataset.key,i=k({},d);if(n===i.currScreen)return;i.currScreen=n,P(i),S(),L(),t.classList.value.indexOf("menu-active")>-1&&t.classList.remove("menu-active");const s=document.getElementById("right-nav");s&&s.scrollTo(0,0)}function Q(){const e=document.getElementById("app"),t=S(),n=L(),i=W();e.append(t),e.append(n),e.append(i)}Q();