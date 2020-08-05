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
       workplaces: ["SPS Consulting", "Federal & Global Fellows", "New Providence High School", "Falzon Electrical Contracting"],
       jobTitles: ["Full-Stack Developer", "Full-Stack Developer", "Animation Instructor", "Assistant Electrician"],
       dates: ["May 2020 - Present", "Spring 2020 - Present", "Summer 2019", "Winter 2020, Summer 2019"],
       desc: [
        [
            "Development of the Blink Resume Progressive Web App (PWA) to quickly create more personalized resume applications",
            "Designed UI and UX then implemented interface with React.js and created a web API using Node.js that communicates with Google Firebase ",
            "Lead a team of three using GitHub for version control"
        ],
        [
            "Development of the student portal and administrative tools including management of a MySQL based database",
            "Redesigned the entire front-end for the student portal and admin portal in React.js",
            "Used PHP to create an API which connects 1,200 users and 30 administrators with their respective portals, and provides them with the tools they need to partake in the program"
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
           ["React.js", "Node.js", "Firebase"],
           ["HTML", "CSS", "Bootstrap", "JQuery", "PHP", "MySQL"],
           ["Blender"],
           []
       ]
    },

    projects: {
        names: ["Blink Resume", 'FGSM Student Portal'],
        tags: [["React.js", "Node.js", "Firebase"], ['React.js', 'React-Bootstrap', 'PHP', 'MySQL']],
        desc: [
            'Generate an HTML resume with video introduction tailored for making the resume review process more personal',
            'Student portal for the Federal and Global Fellows Programs at UMD'
        ],
        imgs: [
            'blinkResume.PNG',
            'studentPortal.PNG'
        ],
        demos: [
            null,
            '/student-portal'
        ]
    }
}

export default data