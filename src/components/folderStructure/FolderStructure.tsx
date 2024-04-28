import './FolderStructure.css';
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';
import { Key, useState } from 'react';

const treeData: TreeDataNode[] = [
  {
    title: 'Bio',
    key: '0-0',
    children: [
      {
        title: 'About me',
        key: '0-0-0',
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    title: 'Interests',
    key: '1-0',
    children: [
      {
        title: 'parent 1-0',
        key: '1-0-0',
        children: [
          {
            title: 'leaf',
            key: '1-0-0-1',
          },
          {
            title: 'leaf',
            key: '1-0-0-2',
          },
          {
            title: 'leaf',
            key: '1-0-0-3',
          },
        ],
      },
    ],
  },
  {
    title: 'Education',
    key: '2-0',
    children: [
      {
        title: 'parent 1-0',
        key: '2-0-0',
        children: [
          {
            title: 'leaf',
            key: '2-0-0-1',
          },
          {
            title: 'leaf',
            key: '2-0-0-2',
          },
          {
            title: 'leaf',
            key: '2-0-0-3',
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
  const [expandTree, setExpandTree] = useState<Key[]>([]);

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', info);
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
          treeData={treeData}
          expandedKeys={expandTree}
        />
      </div>
    </div>
  );
};

export default FolderStructure;
