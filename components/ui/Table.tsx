
import React from 'react';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-6 py-3">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <tr className="bg-white border-b dark:bg-card dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {children}
    </tr>
)

export const TableCell: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
    <td className={`px-6 py-4 ${className}`}>{children}</td>
)


export default Table;
