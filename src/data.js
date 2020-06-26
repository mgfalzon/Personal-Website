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
            "Responsible for full-stack development of Blink Resume website and app",
            "Programmed primarily in React.js with react-bootstrap"
        ],
        [
            "Full-stack development of student portal and administrative tools",
            "Responsible as main point of contact for students with regards to errors or confusion on the portal"
        ],
        [
            "Created a curriculum for a class, 'Introduction to 3D Animation'",
            "Taught students how to use Blender software For modeling, rigging, animation, rendering, compositing and video editing"
        ],
        [
            "Worked at various sites installing and updating electrical appliances including but not limited to switches, outlets, lights, Fixtures, and smoke detectors"
        ],
       ],
       tags: [
           ["React.js", "React-Bootstrap"],
           ["React.js", "React-Bootstrap", "PHP", "MySQL"],
           ["Blender"],
           []
       ]
    },

    projects: {
        names: ["Blink Resume", 'FGSM Student Portal'],
        tags: [["React.js", "React-Bootstrap"], ['React.js', 'React-Bootstrap', 'PHP', 'MySQL']],
        desc: [
            'Generate an HTML resume with video introduction tailored for making the resume review process more personal',
            'Student portal for the Federal and Global Fellows Programs at UMD'
        ],
        imgs: [
            'blinkResume.PNG',
            'studentPortal.PNG'
        ]
    }
}

export default data