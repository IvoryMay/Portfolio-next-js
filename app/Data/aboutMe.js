
import { GrCode } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { PiSuitcaseSimpleLight } from "react-icons/pi";


 const aboutMe = [
   {
    title: "My Experience",
    description: ["Junior frontend developer(Internship) at MMS IT from July 2025 - Sep 2025","Back End Developer(Internship) at MMS IT from Oct 2025 - Present"],
    icon: <PiSuitcaseSimpleLight />,
  },
  {
    title: "Languages",
    description: ["HTML", "CSS", "JavaScript", "React Js", "Next Js","PHP", "Laravel"],
    icon: <GrCode />,
  },
  {
    title: "Education",
    description: [
      "B.Pharm (University of Pharmacy, Mandalay)",
      "Learning programming at MMS IT since 2023",
    ],
    icon: <FaGraduationCap />,
  }
 
];

export default aboutMe