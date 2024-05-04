import "./FolderStructure.css";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import { Dispatch, Key, SetStateAction, useState } from "react";
import { ChildrenType, fileList } from "../../constants/constants";

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
  // console.log("fileListChildren", fileListChildren);
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

  return (
    <div className="folder-structure-wrap">
      <div className="title">{folderTitle}</div>
      <div className="folder-wrap">
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
      </div>
    </div>
  );
};

export default FolderStructure;
