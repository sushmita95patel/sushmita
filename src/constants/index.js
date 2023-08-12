import {
    mobile,
    backend,
    frontend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    Django,
    carrent,
    jobit,
    threejs,
    graduation,
    school,
    CPP,
  
    //  Navbar,
    // Hero,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Education",
      title: "Education",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact Me",
      title: "Contact Me",
    },
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Back-End Developer",
      icon: backend,
    },
    {
      title: "Front-End Developer",
      icon: frontend,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "CPP",
      icon: CPP,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Django",
      icon: Django,
    },
    
  ];
  
  const Education = [
    {
      title: "Bachelor Of Technology",
      company_name: "graduation",
      icon: graduation,
      iconBg: "#E6DEDD",
      date: "july 2019 - may 2023",
      points: ["I have successfully completed my Bachelor's degree in Computer Science at SIRTS Bhopal, India",],
    },
    {
      title: "Higher Secondary Certificate",
      company_name: "school",
      icon: school,
      iconBg: "#E6DEDD",
      date: "july 2018 - may 2019",
      points: ["At GB Pant High. Sec. School Bhopal",],
        
    },
    
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "React Movie App",
      description:
        "Discover the captivating world of movies through my React-based movie app, powered by the Movie Database API. Using HTML, CSS, and the frontend JavaScript library, I've crafted an immersive user interface that brings the magic of cinema right to your screen.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "DataBase API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://react-movie-app-alpha.vercel.app/",
    },
    {
      name: "Personal Portfolio WebSite",
      description:
        "Welcome to my personal portfolio website! Here, I showcase my skills, projects, and experiences, providing a glimpse into my journey as a passionate individual in the world of technology and creativity. Explore my work and get to know me better.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, Education, projects };