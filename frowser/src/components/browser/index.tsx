import React from 'react';
import styled from 'styled-components';

import CollectionView from './collection-view';
import DocumentView from './document-view';
import DataView from './data-view';

const Browser = () => {
  return (
    <SBrowser>
      <CollectionView />
      <DocumentView />
      <DataView />
    </SBrowser>
  );
};
export default Browser;

const SBrowser = styled.div`
  height: 500px;
  display: grid;
  grid-template-columns: 300px 300px 400px;
`;
