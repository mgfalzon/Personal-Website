
const data = {

    about: {
        nickname: "Matt",
        job: 'software developer',
        location: "Basking Ridge, NJ",
        personalDesc: "I enjoy creating websites, apps, and programs that look good and preform well. My goal is to build products that provide users with an intuitive and enjoyable experience.",
        jobDesc: "I am a computer science student at the [University] [of] [Maryland] where I work on a wide variety of interesting and meaningful projects on a daily basis.",
        listHeader: "Here are a few technologies I've been working with recently:", 
        list: ["Java", "Python", "C", "Javascript (ES6+)", "React.js", "HTML & CSS"] 
    },

    work: {
       workplaces: ["Federal & Global Fellows", "SPS Consulting", "New Providence High School", "Falzon Electrical Contracting"],
       jobTitles: ["Full-Stack Developer", "Full-Stack Developer", "Animation Instructor", "Assistant Electrician"],
       dates: ["Spring 2020 - Present", "Summer 2020", "Summer 2019", "Winter 2020, Summer 2019"],
       desc: [
        [
            "Development of the student portal and administrative tools including management of a MySQL based database",
            "Redesigned the entire front-end for the student portal and admin portal in React.js",
            "Used PHP to create an API which connects 250 users and 8 administrators with their respective portals, and provides them with the tools they need to partake in the program"
        ],
        [
            "Development of the Blink Resume Progressive Web App (PWA) to quickly create more personalized resume applications",
            "Designed UI and UX then implemented interface with React.js which connects to a web API using Node.js and communicates with Google Firebase ",
            "Lead a team of three using GitHub for version control"
        ],
        [
            "Created a curriculum for a class, 'Introduction to 3D Animation'",
            "Taught a 30 student class how to use Blender software For modeling, rigging, animation, rendering, compositing and video editing"
        ],
        [
            "Worked at various sites installing and updating electrical appliances including but not limited to switches, outlets, lights, Fixtures, and smoke detectors"
        ],
       ],
       tags: [
           ["React.js", "HTML/CSS", "PHP", "MySQL"],
           ["React.js", "Node.js", "Firebase"],
           ["Blender"],
           []
       ]
    },

    projects: {
        names: ["Blink Resume", 'FGSM Student Portal'],
        tags: [
            ["React.js", "Node.js", "Firebase"], 
            ['React.js', 'React-Bootstrap', 'PHP', 'MySQL'],
        ],
        desc: [
            `The Blink Resume **Progressive Web App** provides a more
            personal hiring experience for recruiters who can’t meet in person with their applicants. The
            PWA connects a user’s resume with a 30 second video introduction which can then be emailed to
            employers. The app is written in React.js and uses a combination of Node.js and Google Firebase on the
            back-end.`,

            `The FGSM student portal is a **complete UX/UI re-design** of the University of Maryland's 
            Federal and Global Fellows student portal. In converting the original codebase from HTML and
            CSS to React.js, much of the PHP back-end has also been rewritten and interactions between the front-end
            and back-end have been simplifed with the introduction of the useAPI hook.`
        ],
        imgs: [
            'blinkResume.PNG',
            'studentPortal.PNG',
        ],
        demos: [
            null,
            '/student-portal',
        ],
        source: [
            null, 
            'https://github.com/mgfalzon/student-portal',
        ]
    },

    archive: {
        titles: ["Blackjack", "Art Gallery", "Arch Linux Configuration"],
        sources: [
            "https://github.com/mgfalzon/blackjack",
            "https://github.com/mgfalzon/gallery",
            "https://github.com/mgfalzon/dotfiles",
        ],
        demos: [
            null,
            "https://mgfalzon.github.io/gallery",
            null,
        ],
        desc: [
            "A simple terminal based blackjack game",
            "A responsive art gallery built in React.js for a friend",
            `My custom arch linux configuration. Designed by to increase my
            productivity and make those long coding sessions more enjoyable`,
        ],
        fullDesc: [
            "The Blackjack project is a simple game designed to test my object-oriented " + 
            "programming skills in Python. The object oriented design allows various poker " +
            "classes to be intuitively extended into blackjack classes. The project uses a " +
            "Display class which appends Strings horizontally to create the text-based interface.",

            "The art gallery project is a flexible image showcase that generates a variable "  +
            "number of responsive pages based on the number of images taken from a source folder. " +
            "Any size of image is supported. The project provides three view - small, medium, and large.",

            "I'm constantly updating my arch linux configuration to my liking. This repository contains " +
            "all relevent configuration files and bash scripts I wrote to perfect my setup."
        ],
        tags: [['Python'], ["React.js", "Javascript"], ['Python', 'Bash']],
        imgs: [['blackjack.png'], ['gallery.PNG'], ['linux.png']]
    }
}

export default data
