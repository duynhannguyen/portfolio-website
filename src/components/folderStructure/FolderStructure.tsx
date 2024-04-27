import "./FolderStructure.css";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";

const treeData: TreeDataNode[] = [
  {
    title: "Bio",
    key: "0-0",
    children: [
      {
        title: "About me",
        key: "0-0-0",
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
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
        children: [
          {
            title: "leaf",
            key: "1-0-0-1",
          },
          {
            title: "leaf",
            key: "1-0-0-2",
          },
          {
            title: "leaf",
            key: "1-0-0-3",
          },
        ],
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
        children: [
          {
            title: "leaf",
            key: "2-0-0-1",
          },
          {
            title: "leaf",
            key: "2-0-0-2",
          },
          {
            title: "leaf",
            key: "2-0-0-3",
          },
        ],
      },
    ],
  },
];

type FolderStructureProps = {
  folderTitle: string;
};

const FolderStructure = ({ folderTitle }: FolderStructureProps) => {
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div className="folder-structure-wrap">
      <div className="title">{folderTitle}</div>
      <div className="folder-wrap">
        <Tree
          className="folder-structure"
          blockNode={true}
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={["0-0-0"]}
          onSelect={onSelect}
          treeData={treeData}
        />
      </div>
    </div>
  );
};

export default FolderStructure;
