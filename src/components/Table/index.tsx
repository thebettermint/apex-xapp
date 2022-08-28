import React, { useState } from 'react';
import styles from './index.module.scss';

import { Search } from 'src/components/Icons';

interface Props {
  children?: React.ReactNode;
  data: any[];
  headers: string[];
  title: string;
}

const sampleData = [
  {
    type: 'individual',
    name: 'Ryan',
    email: 'intercoder@whirled.io',
    wallet: 'relkajdfaj;sfl',
    recentActivity: 'saf',
  },
  {
    type: 'individual',
    name: 'Pablo',
    email: 'pablo@whirled.io',
    wallet: 'relkajdfaj;sfl',
    recentActivity: 'saf',
  },
  {
    type: 'individual',
    name: 'James',
    email: 'james@whirled.io',
    wallet: 'relkajdfaj;sfl',
    recentActivity: 'saf',
  },
  {
    type: 'individual',
    name: 'Sample',
    email: 'sample@whirled.io',
    wallet: 'relkajdfaj;sfl',
    recentActivity: 'saf',
  },
  {
    type: 'individual',
    name: 'Ryan',
    email: 'intercoder@whirled.io',
    wallet: 'relkajdfaj;sfl',
    recentActivity: 'saf',
  },
];

const sampleHeaders = ['type', 'name', 'email', 'wallet', 'recent activity'];

const TableContainer = () => {};

const Table = ({ title, headers, data }: Props) => {
  const [index, setIndex] = useState<number>(0);

  if (!data) data = sampleData;
  if (!headers) headers = sampleHeaders;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{title.toUpperCase()}</div>
        <div className={styles.filters}>
          <div>ALL</div>
          <div>PENDING</div>
          <div>COMPLETED</div>
        </div>
        <div className={styles.search}>
          <Search size={12} />
        </div>
      </div>

      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            {headers.map((head: string, i: number) => (
              <th key={i}>{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((set: any) => {
            return (
              <tr>
                {Object.keys(set).map((item: string | number, i: number) => (
                  <td key={i}>{set[item]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.bottom}></div>
    </div>
  );
};

export default Table;
