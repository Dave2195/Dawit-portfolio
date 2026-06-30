import studentImage from "../assets/images/student-management.png";
import policeImage from "../assets/images/police-inventory.png";

const projects = [

    {
        id:1,

        title:"Student Management System",

        image:studentImage,

        description:
        "A full-stack Student Management System built using React, Django REST Framework and MySQL.",

        technologies:[
            "React",
            "Django",
            "MySQL"
        ],

        github:"https://github.com/YOUR_USERNAME/student-management",

        demo:"#"
    },

    {
        id:2,

        title:"Police Inventory Management System",

        image:policeImage,

        description:
        "A role-based inventory management system for managing police equipment.",

        technologies:[
            "React",
            "Django",
            "MySQL"
        ],

        github:"https://github.com/YOUR_USERNAME/police-inventory",

        demo:"#"
    }

];

export default projects;