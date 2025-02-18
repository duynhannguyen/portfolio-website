import "./FolderStructure.css";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import {
  Dispatch,
  Key,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ChildrenType,
  fileList,
  mainPage,
  projectList,
} from "../../constants/constants";
import ProjectFillter from "../projectFillter/ProjectFillter";
import Project from "../project/Project";
import ContactSection from "../contactSection/ContactSection";
import ContactForm from "../contactForm/ContactForm";

type FolderStructureProps = {
  folderTitle: string;
  setShowTabBar: Dispatch<SetStateAction<ChildrenType[]>>;
  showTabBar: ChildrenType[];
  selectedKey: Key[];
  setSelectdKey: Dispatch<SetStateAction<Key[]>>;
  fillterOptions: string[];
  getFillter: (option: string) => void;
};

const FolderStructure = ({
  folderTitle,
  setShowTabBar,
  showTabBar,
  setSelectdKey,
  selectedKey,
  getFillter,
  fillterOptions,
}: FolderStructureProps) => {
  const [expandTree, setExpandTree] = useState<Key[]>([]);
  const fileListChildren = fileList.map((item) => {
    return item.children;
  });
  const updatedData: TreeDataNode[] = fileList.map((item) => {
    const { children } = item;
    const updateChildren = children.map((child) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { component, ...rest } = child;

      return rest;
    });
    return { ...item, children: updateChildren };
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    const currentKey = info?.node?.key;
    console.log("selectedKeys", selectedKeys);
    console.log("selected", info);
    if (expandTree.includes(info?.node?.key)) {
      setExpandTree((prev) => prev.filter((key) => key !== info?.node?.key));
    } else {
      setExpandTree((prev) => [...prev, info?.node?.key]);
    }

    if (currentKey && !info?.node?.children) {
      setSelectdKey(selectedKeys);
      const isFileExit = showTabBar.find((item) => item.key === currentKey);
      if (isFileExit) {
        const activeCurrentFile = showTabBar.map((item) => {
          if (item.key !== currentKey) {
            item.isActive = false;
          } else {
            item.isActive = true;
          }
          return item;
        });
        return setShowTabBar(activeCurrentFile);
      }
      const listKey = fileListChildren.flat();
      const listKeyResult = listKey.filter((item) => {
        item.isActive = false;
        if (item.key === currentKey) {
          return (item.isActive = true);
        }
      });
      const deActiveCurrentTab = showTabBar.map((tab) => {
        tab.isActive = false;
        return tab;
      });
      return setShowTabBar([...deActiveCurrentTab, ...listKeyResult]);
    }
  };

  const addProjectPage = useCallback(
    (title: string): ChildrenType[] => {
      const projectsTab: ChildrenType = {
        title: title,
        key: mainPage.project,
        component: <Project myProjects={projectList} />,
        isActive: true,
      };
      const newTabBar = showTabBar.map((tab) => {
        tab.isActive = false;
        return tab;
      });
      const addNewTabBar: ChildrenType[] = [...newTabBar, projectsTab];

      return addNewTabBar;
    },
    [showTabBar, fillterOptions]
  );
  const addContactPage = useCallback(
    (title: string): ChildrenType[] => {
      const contactTab: ChildrenType = {
        title: title,
        key: mainPage.contact,
        component: <ContactForm />,
        isActive: true,
      };
      const newTabBar = showTabBar.map((tab) => {
        tab.isActive = false;
        return tab;
      });
      const addNewTabBar: ChildrenType[] = [...newTabBar, contactTab];
      return addNewTabBar;
    },
    [showTabBar]
  );
  const isProjectPageExit = showTabBar.find(
    (tab) => tab.title === mainPage.project
  );
  const isContactPageExit = showTabBar.find(
    (tab) => tab.title === mainPage.contact
  );

  const showFolderByTitle = useCallback(() => {
    let tree: ReactNode = null;
    switch (folderTitle) {
      case mainPage.project:
        tree = (
          <ProjectFillter
            getFillter={getFillter}
            fillterOptions={fillterOptions}
          />
        );

        break;
      case mainPage.contact:
        tree = <ContactSection />;
        break;
      default:
        tree = (
          <Tree
            className="folder-structure"
            blockNode={true}
            switcherIcon={<DownOutlined />}
            onSelect={onSelect}
            treeData={updatedData}
            expandedKeys={expandTree}
            selectedKeys={selectedKey}
            defaultSelectedKeys={selectedKey}
          />
        );
        break;
    }
    return tree;
  }, [folderTitle, expandTree, onSelect, selectedKey, updatedData]);
  useEffect(() => {
    if (!isProjectPageExit && folderTitle === mainPage.project) {
      showFolderByTitle();
      const addingPage = addProjectPage(folderTitle);
      setShowTabBar(addingPage);
    }
    if (!isContactPageExit && folderTitle === mainPage.contact) {
      showFolderByTitle();
      const addingPage = addContactPage(folderTitle);
      setShowTabBar(addingPage);
    }
  }, [
    folderTitle,
    addProjectPage,
    isProjectPageExit,
    showFolderByTitle,
    setShowTabBar,
    addContactPage,
    isContactPageExit,
  ]);

  return (
    <section className="folder-structure-wrap">
      <div className="title">{folderTitle}</div>
      <div className="folder-wrap">{showFolderByTitle()}</div>
    </section>
  );
};

export default FolderStructure;
