import { useState } from 'react';
import Input from '../../ui/input';
import Table from '../../ui/table';

const TableFilter: FC<Components.ui.table> = props => {
  const [searches, setSearches] = useState<Record<string, string>>({});

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-4 justify-between">
        {props?.columns?.map((col, index) => (
          <Input
            name={col}
            key={col}
            label={`search ${col}`}
            className="w-[48%]"
            onChange={e => setSearches(state => ({ ...state, [col]: e.target.value }))}
          />
        ))}
      </div>

      <Table
        {...props}
        data={props?.data?.filter(row => {
          return Object.entries(searches).every(([col, value]) => {
            return row[col].toString().toLowerCase().includes(value.toLowerCase());
          });
        })}
      ></Table>
    </div>
  );
};

export default TableFilter;
