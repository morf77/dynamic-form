import React, { useState, useRef, useEffect } from 'react';
import NoDataFound from '../../factory/no-data-found';

const Table: React.FC<Components.ui.table> = ({ columns, data }) => {
  // Local state for column order
  const [colOrder, setColOrder] = useState(columns);
  const dragCol = useRef<string | null>(null);

  // Handle drag events for columns
  const handleDragStart = (col: string) => {
    console.log('drag start');
    dragCol.current = col;
  };

  const handleDragOver = (e: React.DragEvent) => {
    console.log('drag end');
    e.preventDefault();
  };

  const handleDrop = (col: string) => {
    console.log('drop');
    if (dragCol.current && dragCol.current !== col && colOrder) {
      const oldIndex = colOrder.indexOf(dragCol.current);
      const newIndex = colOrder.indexOf(col);
      const newOrder = [...colOrder];
      newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, dragCol.current);
      setColOrder(newOrder);
    }
    dragCol.current = null;
  };

  useEffect(() => {
    setColOrder(columns);
  }, [columns]);

  return (
    <div className="overflow-x-auto">
      {data?.length && colOrder?.length ? (
        <div className="border border-gray-200 min-w-full dark:border-gray-700 rounded-lg shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr>
                {colOrder.map(col => (
                  <th
                    key={col}
                    draggable
                    onDragStart={() => {
                      handleDragStart(col);
                    }}
                    onClick={() => console.log('clicked')}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(col)}
                    className="px-4 py-2 border-b bg-gray-100 dark:bg-gray-700 text-left text-sm font-semibold cursor-move select-none"
                  >
                    {col}
                    <span className="ml-2 text-gray-400">&#x2630;</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  {colOrder.map(col => (
                    <td
                      draggable
                      onDragStart={() => {
                        handleDragStart(col);
                      }}
                      onClick={() => console.log('clicked')}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(col)}
                      key={col}
                      className="px-4 py-2 border-t text-sm"
                    >
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
