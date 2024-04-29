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
  setShowFile: Dispatch<SetStateAction<Key>>;
};

const FolderStructure = ({
  folderTitle,
  setShowTabBar,
  showTabBar,
  setShowFile,
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
    console.log("selected", info);
    if (expandTree.includes(info?.node?.key)) {
      setExpandTree((prev) => prev.filter((key) => key !== info?.node?.key));
    } else {
      setExpandTree((prev) => [...prev, info?.node?.key]);
    }
    if (info?.node?.key) {
      setShowFile(info?.node?.key);
      if (showTabBar.some((item) => item.key === info?.node?.key)) {
        return;
      }
      const listKey = fileListChildren.flat();
      const listKeyResult = listKey.filter((item) => {
        return item.key === info?.node?.key;
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
        />
      </div>
    </div>
  );
};

export default FolderStructure;
