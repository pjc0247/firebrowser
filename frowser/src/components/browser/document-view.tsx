import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { firestore } from 'firebase';

import { documentState, documentsSelector } from '../../state/browser';

const DocumentView = () => {
  const [document, setDocument] = useRecoilState<any>(documentState);
  const documents = useRecoilValue(documentsSelector);

  const onClickDocument = (doc: firestore.QueryDocumentSnapshot) => {
    setDocument(doc);
  };

  return (
    <SDocumentView>
      {documents.map(doc => {
        return (
          <SDocumentRow onClick={() => onClickDocument(doc)}>
            {doc.id}
          </SDocumentRow>
        );
      })}
    </SDocumentView>
  );
};
export default DocumentView;

const SDocumentView = styled.div`
  border: 1px solid black;
`;
const SDocumentRow = styled.div`
  cursor: pointer;
`;
