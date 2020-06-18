import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { collectionState } from '../../state/browser';

const CollectionView = () => {
  const [collection, setCollection] = useRecoilState(collectionState);
  return (
    <SCollectionView>
    </SCollectionView>
  );
};
export default CollectionView;

const SCollectionView = styled.div`
  border: 1px solid black;
`;