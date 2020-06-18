import React from 'react';

const DataTreeView = ({ data, depth = 0 }: any) => {
  const keys = Object.keys(data);
  return (
    <div style={{ marginLeft: depth * 15 }}>
      {keys.map(x => {
        const isObject = typeof data[x] === 'object';
        return (
          <div>
            <span>{x}: </span>
            {isObject && <DataTreeView data={data[x]} depth={depth + 1} />}
            {!isObject && <span>{data[x]}</span>}
          </div>
        );
      })}
    </div>
  );
};
export default DataTreeView;
