const diff_years = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);

    return Math.abs(Math.round(diff/365.25));
}

export const projectsData = [
    {
      title: 'Project K.I.S.S. - Keep It Simple Stupid',
      github: 'https://github.com/AksBad007/Project-K.I.S.S.',
      demo: 'http://project-k-i-s-s-aksbad007.vercel.app/'
    },
    {
      title: 'Chatter-Type',
      github: 'https://github.com/AksBad007/chatter-type',
      demo: 'http://chatter-type.vercel.app/'
    },
    {
      title: 'Dev-Assist',
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
                lvl: 'Experienced',
            },
            {
                name: 'CSS',
                lvl: 'Intermediate',
            },
            {
                name: 'JavaScript',
                lvl: 'Experienced',
            },
            {
                name: 'BOOTSTRAP',
                lvl: 'Beginner',
            },
            {
                name: 'JQuery',
                lvl: 'Intermediate',
            },
            {
                name: 'React.js',
                lvl: 'Beginner',
            },
        ]
    },
    {
        domain: 'Backend Development',
        skills: [
            {
                name: 'Node.js',
                lvl: 'Experienced',
            },
            {
                name: 'Python/Flask',
                lvl: 'Intermediate',
            },
            {
                name: 'MySQL',
                lvl: 'Intermediate',
            },
            {
                name: 'MongoDB',
                lvl: 'Intermediate',
            }
        ]
    },
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
