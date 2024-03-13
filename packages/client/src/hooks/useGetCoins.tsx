import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL } from '../utils';

export type UseGetCoinsProps = {
  search?: String;
  ids?: String[];
  limit: Number;
  offset: Number;
};

export const useGetCoins = ({ search, ids, limit, offset }: UseGetCoinsProps) => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    axios
      .get(URL, {
        params: { limit: limit },
        headers: {
          Authorization: 'Bearer 659d2e0a-8869-40fe-9ef2-1cb66d4e243f',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
      })
      .then(response => {
        setDataSource(response.data.data);
        setLoading(false);
      })
      .catch(e => {
        console.error('Error Axios:' + e);
        setLoading(false);
      });
  }, []);

  return { loading, source: dataSource };
};
