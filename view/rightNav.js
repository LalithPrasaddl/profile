import { generateContent } from '../components/wrapper'
import { appState, siteData } from '../model/data'

export function rightNav() {
  let content = home()
  if (appState.currScreen === 'about') {
    content = about()
  } else if (appState.currScreen === 'contact') {
    content = contact()
  } else if (appState.currScreen === 'employment') {
    content = employment()
  } else if (appState.currScreen === 'projects') {
    content = projects()
  }
  const rightNavDom = {
    type: 'div',
    elmAttrs: {
      className: 'right-nav',
      id: 'right-nav'
    },
    childElms: [content]
  }
  const rightNav = generateContent(rightNavDom)
  return rightNav
}

export function home() {
  return {
    type: 'div',
    elmAttrs: {
      className: 'home-wrapper'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'home-wrapper-items'
      },
      childElms: [{
        type: 'h1',
        elmAttrs: {
          className: 'title',
          innerHTML: 'Hello, I\'m ' + siteData.name
        }
      }, {
        type: 'h3',
        elmAttrs: {
          className: 'sub-title',
          innerHTML: 'Web Developer'
        }
      }]
    }]
  }
}

export function about() {
  const aboutInfoItem = aboutInfo()
  const profSkillsItem = professionalSkills('Professional Skills', siteData.professionalSkills)
  const langSkillsItem = professionalSkills('Languages Known', siteData.languages)
  const myEducationItem = myEducation()
  const hobbiesItem = professionalSkills('Hobbies', siteData.hobbies)
  return {
    type: 'div',
    elmAttrs: {
      className: 'about-wrapper',
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'section-title-wrapper'
      },
      childElms: [{
        type: 'span',
        elmAttrs: {
          className: 'section-title',
          innerHTML: 'About Me'
        }
      }]
    }, aboutInfoItem, profSkillsItem, langSkillsItem, myEducationItem, hobbiesItem]
  }
}

export function aboutInfo() {
  const aboutInfoItems = []
  for (let i = 0; i < siteData.aboutItems.length; i++) {
    const item = siteData.aboutItems[i]
    aboutInfoItems.push({
      type: 'div',
      elmAttrs: {
        className: 'about-info-item'
      },
      childElms: [{
        type: 'div',
        childElms: [{
          type: 'span',
          elmAttrs: {
            className: 'material-icons',
            innerHTML: item.icon
          }
        }]
      }, {
        type: 'div',
        elmAttrs: {
          className: 'about-info-item-dets'
        },
        childElms: [{
          type: 'div',
          elmAttrs: {
            innerHTML: item.title
          },
        }, {
          type: 'div',
          elmAttrs: {
            innerHTML: item.subTitle
          }
        }]
      }]
    })
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'about-info'
    },
    childElms: [{
      type: 'h4',
      elmAttrs: {
        innerHTML: siteData.name,
        className: 'about-info-name'
      }
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: siteData.location,
        className: 'about-info-location'
      }
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: siteData.aboutDesc,
        className: 'about-info-desc'
      }
    }, {
      type: 'div',
      elmAttrs: {
        className: 'about-info-items'
      },
      childElms: aboutInfoItems
    }]
  }
}

export function professionalSkills(title, skills) {
  const profSkills = []
  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i]
    profSkills.push({
      type: 'div',
      elmAttrs: {
        className: 'prof-skill-item'
      },
      childElms: [{
        type: 'div',
        elmAttrs: {
          innerHTML: skill.label
        }
      }, {
        type: 'div',
        elmAttrs: {
          className: 'exp',
          innerHTML: skill.exp
        }
      }]
    })
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'prof-skills'
    },
    childElms: [{
      type: 'h4',
      elmAttrs: {
        className: 'about-section-title'
      },
      childElms: [{
        type: 'span',
        elmAttrs: {
          innerHTML: title,
        }
      }]
    }, {
      type: 'div',
      elmAttrs: {
        className: 'prof-skill-items'
      },
      childElms: profSkills
    }]
  }
}

export function myEducation() {
  return {
    type: 'div',
    elmAttrs: {
      className: 'prof-skills'
    },
    childElms: [{
      type: 'h4',
      elmAttrs: {
        className: 'about-section-title'
      },
      childElms: [{
        type: 'span',
        elmAttrs: {
          innerHTML: 'My Education',
        }
      }]
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: 'Bachelor of Engineering, 2012',
        className: 'education-title'
      }
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: 'M S Ramaiah Institute of Technology'
      }
    }, {
      type: 'div',
      elmAttrs: {
        innerHTML: 'Bangalore, India'
      }
    }]
  }
}

export function contact() {
  const contactItems = []
  for (let i = 0; i < siteData.contact.length; i++) {
    const contact = siteData.contact[i]
    contactItems.push({
      type: 'a',
      elmAttrs: {
        innerHTML: contact.label,
        href: contact.link,
        target: '_blank'
      }
    })
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'contact-wrapper'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'contact-wrapper-section'
      },
      childElms: [{
        type: 'div',
        childElms: [{
          type: 'h1',
          elmAttrs: {
            innerHTML: 'Contact'
          }
        }, {
          type: 'div',
          elmAttrs: {
            className: 'contact-items'
          },
          childElms: contactItems
        }]
      }]
    }]
  }
}

export function employment() {
  const companies = []
  for (let i = 0; i < siteData.companies.length; i++) {
    const company = siteData.companies[i]
    const projectsData = processProjectsData(company.projects.reverse())
    const companyData = {
      type: 'div',
      elmAttrs: {
        className: 'company-wrapper'
      },
      childElms: [{
        type: 'div',
        elmAttrs: {
          innerHTML: company.duration,
          className: 'company-duration'
        }
      }, {
        type: 'h3',
        elmAttrs: {
          innerHTML: company.role ? [company.company, company.role].join(', ') : company.company
        }
      }, {
        type: 'div',
        elmAttrs: {
          innerHTML: company.desc
        }
      }]
    }
    if (projectsData.length > 0) {
      companyData.childElms.push({
        type: 'div',
        childElms: projectsData
      })
    }
    companies.push(companyData)
  }
  return {
    type: 'div',
    elmAttrs: {
      className: 'carrer-wrapper',
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'section-title-wrapper'
      },
      childElms: [{
        type: 'span',
        elmAttrs: {
          className: 'section-title',
          innerHTML: 'Employment'
        }
      }]
    }, ...companies]
  }
}

export function processProjectsData(projects) {
  const projectsData = []
  for (let j = 0; j < projects.length; j++) {
    const project = projects[j]
    const responsibilities = project.responsibilities || []
    const responsibilitiesItems = []
    for (let k = 0; k < responsibilities.length; k++) {
      const item = responsibilities[k]
      responsibilitiesItems.push({
        type: 'li',
        elmAttrs: {
          innerHTML: item
        }
      })
    }
    const skills = project.skills
    const skillsItems = []
    for (let l = 0; l < skills.length; l++) {
      const skill = skills[l]
      skillsItems.push({
        type: 'div',
        elmAttrs: {
          className: 'project-skill',
          innerHTML: skill
        }
      })
    }
    projectsData.push({
      type: 'div',
      elmAttrs: {
        className: 'project'
      },
      childElms: [{
        type: 'div',
        elmAttrs: {
          className: 'project-title'
        },
        childElms: [{
          type: 'div',
          elmAttrs: {
            innerHTML: j + 1
          }
        }, {
          type: 'h4',
          elmAttrs: {
            innerHTML: project.duration ? [project.client, project.duration].join(', ') : project.client
          }
        }]
      }, {
        type: 'div',
        elmAttrs: {
          innerHTML: project.desc
        }
      }, {
        type: 'ul',
        childElms: responsibilitiesItems
      }, {
        type: 'div',
        elmAttrs: {
          className: 'project-skills-wrapper'
        },
        childElms: skillsItems
      }]
    })
  }
  return projectsData
}

export function projects() {
  const projects = processProjectsData(siteData.selfProjects.reverse())
  return {
    type: 'div',
    elmAttrs: {
      className: 'projects-wrapper',
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'section-title-wrapper'
      },
      childElms: [{
        type: 'span',
        elmAttrs: {
          className: 'section-title',
          innerHTML: 'Projects'
        }
      }]
    }, ...projects]
  }
}
