import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { BsLinkedin, BsFileCode } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoDiscord } from 'react-icons/io5'
import { SiCodeproject } from 'react-icons/si'

const diff_years = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);

    return Math.abs(Math.round(diff/365.25));
}

const LinkedInSocial = {
    link: 'https://www.linkedin.com/in/akshat-arora-007/',
    icon: <BsLinkedin />
}

export const GitHubSocial = 'https://github.com/AksBad007/'

export const headerSocials = [
    LinkedInSocial,
    {
        link: GitHubSocial,
        icon: <FaGithub />
    }
]

export const navData = [
    {
        section: 'header',
        title: 'Home',
        icon: <AiOutlineHome />
    },
    {
        section: 'about',
        title: 'About Me',
        icon: <AiOutlineUser />
    },
    {
        section: 'qualifications',
        title: 'Qualifications',
        icon: <BiBook />
    },
    {
        section: 'skills',
        title: 'Skills',
        icon: <BsFileCode />
    },
    {
        section: 'projects',
        title: 'Projects',
        icon: <SiCodeproject />
    },
    {
        section: 'contact',
        title: 'Contact Me',
        icon: <BiMessageSquareDetail />
    }
]

export const projectsData = [
    {
      title: 'Project K.I.S.S. - Keep It Simple Stupid',
      desc: `The project is aimed to provide an immersive experience for 
            frontend practice (HTML, CSS and JavaScript) along with the presence of a Music 
            Player and a To-Do List.`,
      github: 'https://github.com/AksBad007/Project-K.I.S.S.',
      demo: 'http://project-k-i-s-s-aksbad007.vercel.app/'
    },
    {
      title: 'Chatter-Type',
      desc: `A terminal-style chat application built using Electron.js and Socket.IO.`,
      github: 'https://github.com/AksBad007/chatter-type',
    },
    {
      title: 'Dev-Assist',
      desc: `This Virtual Assistant was created for 
            TreeHacks annual Hackathon 2021, hosted by Stanford University. It takes user’s 
            queries related to coding as input and scrapes the internet to provide a solution.`,
      github: 'https://github.com/PriyavKaneria/Dev-Assist',
      demo: 'https://priyavkaneria.github.io/Dev-Assist/'
    }
]

export const skillsData = [
    {
        domain: 'Frontend Development',
        skills: [
            {
                name: 'HTML',
                lvl: 'Experienced'
            },
            {
                name: 'CSS',
                lvl: 'Intermediate'
            },
            {
                name: 'BOOTSTRAP',
                lvl: 'Beginner'
            },
            {
                name: 'JQuery',
                lvl: 'Intermediate'
            },
            {
                name: 'React.js',
                lvl: 'Beginner'
            },
            {
                name: 'Angular.js',
                lvl: 'Beginner'
            }
        ]
    },
    {
        domain: 'Backend Development',
        skills: [
            {
                name: 'Node.js',
                lvl: 'Experienced'
            },
            {
                name: 'Flask',
                lvl: 'Intermediate'
            }
        ]
    },
    {
        domain: 'Programming Languages',
        skills: [
            {
                name: 'C/C++',
                lvl: 'Beginner'
            },
            {
                name: 'JavaScript',
                lvl: 'Experienced'
            },
            {
                name: 'Python',
                lvl: 'Intermediate'
            }
        ]
    },
    {
        domain: 'Miscellaneous',
        skills: [
            {
                name: 'MySQL',
                lvl: 'Intermediate'
            },
            {
                name: 'MongoDB',
                lvl: 'Intermediate'
            },
            {
                name: 'Linux',
                lvl: 'Intermediate'
            }
        ]
    }
]

export const educationData = [
    {
        major: 'Master\'s in Computer Applications',
        school: 'Guru Nanak Dev Univeristy',
        date: '2018 - 2023'
    },
    {
        major: 'Class XII',
        school: 'Shri Ram Ashram Sen. Sec. School',
        date: '2018'
    },
    {
        major: 'Class X',
        school: 'Shri Ram Ashram Sen. Sec. School',
        date: '2016'
    }
]

export const xpData = [
    // {
    //     role: 'Web Developer',
    //     company: 'Mansa Infotech',
    //     location: 'Punjab, India',
    //     date: 'July 2022 - Present'
    // },
    {
        role: 'Backend Developer',
        company: 'Rock IT Solutions',
        location: 'Punjab, India',
        date: 'Dec 2021 - July 2022'
    },
    {
        role: 'Frontend Developer (Intern)',
        company: 'Widhya',
        location: 'Remote',
        date: 'Jan 2021 - Feb 2021'
    }
]

export const footerSocials = [
    {
        link: 'https://www.instagram.com/akshat_bad_007/',
        icon: <FiInstagram />
    },
    LinkedInSocial,
    {
        link: 'https://www.discordapp.com/users/Akshat#4299/',
        icon: <IoLogoDiscord />
    }
]

export const totalProjects = projectsData.length

export const totalXp = diff_years(new Date(), new Date('12/6/2021'))

export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top <= window.innerHeight / 3 ||
        rect.bottom <= window.innerHeight / 3
    )
}

export const redirect = (destination) => {
    document.getElementById(destination).scrollIntoView({ behavior: 'smooth', block: 'center' })
}
