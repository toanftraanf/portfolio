import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

// 5/12/2024
export const projectsData = [
  {
    id: 1,
    name: "Intelligent Meeting App",
    description:
      "My team developed an web app for online meeting booking system of an organisation using .NET. I developed APIs for meeting booking feature.",
    tools: [
      ".NET Core",
      "MySQl",
      "Redis",
      "Seaweed",
      "Z.BulkOperations",
      "MailKit",
      "ZXing.Net",
      "PdfSharp",
      "NPOI",
      "JWT",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Access Control App",
    description:
      "I and my team developed an Access control and meeting management system web app. I set up the base BE source code and developed the API with ASP.NET Core, MySQL and Redis. I also implemented features for managing meeting room bookings, allowing users to reserve and manage meeting spaces efficiently and manage accessing signal of people inside building",
    tools: [
      ".NET Core",
      "MySQl",
      "Redis",
      "Seaweed",
      "Z.BulkOperations",
      "MailKit",
      "ZXing.Net",
      "PdfSharp",
      "NPOI",
      "JWT",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "FPTU CTF Portal",
    description:
      "My team developed a custom CTF Portal for FPTU CTF Contest based on open source CTFd. We used Flask Python, .NET, MySQL. We designed and developed a challenge called King Of The Hill. Moreover, we completed the existing project from another team who developed before.",
    tools: ["Python", "Flask", ".NET", "Redis", "MySQL", "Jinja2", "Pytest"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
