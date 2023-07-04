import React, { useEffect, useState, Fragment } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface TableProps {
  articalList: any;
  tableConfig: any;
  closeModal: any;
}

const TableComponent: React.FC<TableProps> = (props) => {
  const { articalList, tableConfig } = props;

  const columns: ColumnsType<DataType> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },

    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    // {
    //   title: '分类',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              editArtical(record);
            }}
          >
            编辑
          </a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const editArtical = (record: any) => {
    console.log(record);
    console.log(tableConfig.modalConfig);
    const obj = tableConfig.modalConfig;
    obj.title = '编辑';
    obj.isModelShow = true;
    tableConfig.setmodalConfig({ ...obj });
  };
  return (
    <Table
      columns={columns}
      dataSource={articalList}
      style={{ width: '100%' }}
      rowKey={'id'}
    />
  );
};

export default TableComponent;