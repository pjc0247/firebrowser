import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { documentState } from '../../state/browser';
import DataTreeView from './data-tree-view';

const DataView = () => {
  const [document, setDocument] = useRecoilState<any>(documentState);

  return (
    <SDataView>
      {document && (
        <DataTreeView data={document.data()} />
      )}
    </SDataView>
  );
};
export default DataView;

const SDataView = styled.div`
  border: 1px solid black;
`;
