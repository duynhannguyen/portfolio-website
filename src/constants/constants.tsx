import { Key, ReactNode } from "react";
import AboutMe from "../components/aboutMe/AboutMe";
import Education from "../components/education/Education";
import MyResume from "../components/myResume/MyResume";

type FileListType = {
  title: string;
  key: Key;
  children: ChildrenType[];
};

export type ChildrenType = {
  title: string;
  key: Key;
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
      },
      {
        title: "My resume",
        key: "0-0-1",
        component: <MyResume />,
      },
      {
        title: "Education",
        key: "0-0-2",
        component: <Education />,
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
      },
    ],
  },
];
