import { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { URL } from '../../utils';
import { useGetCoins } from '../../hooks/useGetCoins';
//

const CoinsTable = () => {
  const { loading, source } = useGetCoins({ limit: 10, offset: 0 });

  const columns = [
    { title: 'Rank', dataIndex: 'rank', key: 'rank' },
    { title: 'Symbol', dataIndex: 'symbol', key: 'symbol' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'priceUsd', key: 'priceUsd', render: (text: string) => parseFloat(text).toFixed(1) },
  ];

  return (
    <>
      {
        loading ? (
          <Spin className='spin' tip='Loading...' size='large'></Spin>
        ) : (
          <Table
            className='antd_table'
            dataSource={source}
            columns={columns}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: e => {},
              };
            }}
          />
        ) // Отображаем таблицу данных после загрузки
      }
    </>
  );
};

export default CoinsTable;
