import "./FolderStructure.css";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import { Key, useState } from "react";
import { fileList } from "../../constants/constants";

type FolderStructureProps = {
  folderTitle: string;
};

const FolderStructure = ({ folderTitle }: FolderStructureProps) => {
  const [expandTree, setExpandTree] = useState<Key[]>([]);

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
      return setExpandTree((prev) =>
        prev.filter((key) => key !== info?.node?.key)
      );
    }

    setExpandTree((prev) => [...prev, info?.node?.key]);
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
