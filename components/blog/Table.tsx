import type { ReactNode } from 'react';

export interface TableProps {
  headers: ReactNode[];
  rows: ReactNode[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm text-slate-800 dark:text-slate-200">
        <thead className="border-b-2 border-slate-300 dark:border-slate-600">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-50"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-slate-200 px-4 py-3 dark:border-slate-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
