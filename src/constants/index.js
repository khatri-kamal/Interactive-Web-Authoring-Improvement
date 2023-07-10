import {
    contact,
    imagemap,
    interest,
    carrent,
    jobit,
    tripguide,
    img1,
    img2,
    img3,
    img4,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "imageMap",
      title: "Image Map",
    },
    {
      id: "interest",
      title: "Interest",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      id: 1,
      icon: img1,
    },
    {
      id: 2,
      icon: img2,
    },
    {id: 3,
      icon: img3,
    },
    {
      id: 4,
      icon: img4,
    },
  ];
  const projects = [
    {
      name: "Peronsal Website",
      description:
        "As a part of Interactive Web course in Ulster, I had to create a multi page website with several features and animations, including rotation and contact form with error handling and a Jquery to show hidden page once clicked.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Screw Shop",
      description:
        "Aa a part of python assigment, I had to create a terminal based application to manage stocks of different screws, features includes, search for different size screws, reducing r increasing stock level, price calculation, and bar chart to show stock leve in more details",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Student Management",
      description:
        "As a part of Java course, I had to work in pairs to create a terminal based application to add, remove, search, delete and show student details such as male to female ratio and course cost part time and full.",
      tags: [
        {
          name: "java",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const previousWebsite = [
    {
      name: "Image Map",
      description:"In my Assignment this is my home page where it show cased all the requirement and four image rotation as well.",
      image: imagemap,
    },
    {
      name: "Interest Page",
      description:"In the interest page there should be two buttons, one called Main Interest and Other Interest and once you click them it would show your interest.",
      image: interest,
    },
    {
      name: "Contact",
      description:"Contact form has a valid form field, it checks if a field is empty or not and if it's empty it prompots the user to eneter something.",
      image: contact,
    },
  ];

  export { services, projects,previousWebsite };