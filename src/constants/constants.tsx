import { Key, ReactNode } from "react";
import AboutMe from "../components/aboutMe/AboutMe";
import Education from "../components/education/Education";
import MyResume from "../components/myResume/MyResume";
import { FaFileCode, FaGamepad, FaUser } from "react-icons/fa6";

type FileListType = {
  title: string;
  key: Key;
  children: ChildrenType[];
};

export type ChildrenType = {
  title: string;
  key: Key;
  isActive: boolean;
  component?: ReactNode;
};

export const fileList: FileListType[] = [
  {
    title: "Bio",
    key: "0-0",
    children: [
      {
        title: "About me",
        key: "0-0-0",
        component: <AboutMe />,
        isActive: false,
      },
      {
        title: "My resume",
        key: "0-0-1",
        component: <MyResume />,
        isActive: false,
      },
      {
        title: "Education",
        key: "0-0-2",
        component: <Education />,
        isActive: false,
      },
    ],
  },
  {
    title: "Interests",
    key: "1-0",
    children: [
      {
        title: "parent 1-0",
        key: "1-0-0",
        isActive: false,
      },
    ],
  },
  {
    title: "Education",
    key: "2-0",
    children: [
      {
        title: "parent 1-0",
        key: "2-0-0",
        isActive: false,
      },
    ],
  },
];

export const mainPage = {
  personal: "Personal info",
  project: "Projects",
  hobbies: "Hobbies",
};

export const iconList = [
  {
    icon: <FaUser title="Personal info" />,
    title: mainPage.personal,
  },
  {
    icon: <FaFileCode title="Projects" />,
    title: mainPage.project,
  },
  {
    icon: <FaGamepad title="Hobbies" />,
    title: mainPage.hobbies,
  },
];

const projectList = [
  {
    projectName: "_Weather-app",
    projectImg: {
      front: "../weather-app-img/weather-app-front.png",
      back: "../weather-app-img/weather-app-back.png",
    },
    projectDescr:
      "Searching & watching weather, uv index and air pollution from cities all over the world",
    projectLink: {
      gitHub: "https://github.com/duynhannguyen/weather-app",
      live: "https://weather-app-xi-sable.vercel.app/",
    },
    tag: [
      { tech: "TypeScript", icon: "TS" },
      { tech: "HTML", icon: "HTML" },
      {
        tech: "CSS",
        icon: "CSS",
      },
    ],
  },
  {
    projectName: "_Simple-calendar",
    projectImg: {
      front: "../weather-app-img/weather-app-front.png",
      back: "../weather-app-img/weather-app-back.png",
    },
    projectDescr: "A simple calendar allow to add event",
    projectLink: {
      gitHub: "https://github.com/duynhannguyen/weather-app",
      live: "https://weather-app-xi-sable.vercel.app/",
    },
    tag: [
      { tech: "TypeScript", icon: "TS" },
      { tech: "HTML", icon: "HTML" },
      {
        tech: "CSS",
        icon: "CSS",
      },
    ],
  },
];
