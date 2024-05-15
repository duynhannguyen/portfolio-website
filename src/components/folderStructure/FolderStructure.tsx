import "./FolderStructure.css";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import { Dispatch, Key, ReactNode, SetStateAction, useState } from "react";
import { ChildrenType, fileList } from "../../constants/constants";
import ProjectFillter from "../projectFillter/ProjectFillter";
import Project from "../project/Project";

type FolderStructureProps = {
  folderTitle: string;
  setShowTabBar: Dispatch<SetStateAction<ChildrenType[]>>;
  showTabBar: ChildrenType[];
  selectedKey: Key[];
  setSelectdKey: Dispatch<SetStateAction<Key[]>>;
};

const FolderStructure = ({
  folderTitle,
  setShowTabBar,
  showTabBar,
  setSelectdKey,
  selectedKey,
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
        console.log("activeCurrentFile", activeCurrentFile);
        return setShowTabBar(activeCurrentFile);
      }
      const listKey = fileListChildren.flat();
      const listKeyResult = listKey.filter((item) => {
        item.isActive = false;
        if (item.key === currentKey) {
          return (item.isActive = true);
        }
      });
      return setShowTabBar((prev) => [...prev, ...listKeyResult]);
    }
  };

  // const addProjectPage = useCallback(
  //   (title: string) => {
  //     const projectsTab = {
  //       title: title,
  //       key: "projects",
  //       component: <Project />,
  //       isActive: true,
  //     };
  //     const newTabBar = showTabBar.map((tab) => {
  //       tab.isActive = false;
  //       return tab;
  //     });
  //     const addNewTabBar = [...newTabBar, projectsTab];
  //     console.log("addNewTabBar", addNewTabBar);

  //     return setShowTabBar(addNewTabBar);
  //   },
  //   [setShowTabBar, showTabBar]
  // );

  const showFolderByTitle = (title: string) => {
    let tree: ReactNode = null;
    switch (title) {
      case "Projects":
        tree = <ProjectFillter />;

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
  };
  if (folderTitle === "Projects") {
    const projectsTab = {
      title: folderTitle,
      key: "projects",
      component: <Project />,
      isActive: true,
    };
    const newTabBar = showTabBar.map((tab) => {
      tab.isActive = false;
      return tab;
    });
    const addNewTabBar = [...newTabBar, projectsTab];
    console.log("addNewTabBar", addNewTabBar);

    // setShowTabBar(addNewTabBar);
  }
  return (
    <section className="folder-structure-wrap">
      <div className="title">{folderTitle}</div>
      <div className="folder-wrap">{showFolderByTitle(folderTitle)}</div>
    </section>
  );
};

export default FolderStructure;
