import NoDataFound from '../../factory/no-data-found';

const Table: React.FC<Components.ui.table> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      {data?.length ? (
        <div className="border border-gray-200 min-w-full dark:border-gray-700 rounded-lg shadow-sm">
          <table className="min-w-full ">
            <thead>
              <tr>
                {columns?.map(col => (
                  <th
                    key={col}
                    className="px-4 py-2 border-b bg-gray-100 dark:bg-gray-700 text-left text-sm font-semibold"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  {columns?.map(col => (
                    <td key={col} className="px-4 py-2 border-t text-sm">
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default Table;
