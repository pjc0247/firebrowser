import {
  atom,
  selector,
} from 'recoil';
import fstore from '../firebase';

export const collectionState = atom({
  key: 'collection',
  default: 'user',
});
export const collectionCursorState = atom({
  key: 'collection.cursor',
  default: null,
});

export const documentsSelector = selector({
  key: 'documentsSelector',
  get: async ({ get }) => {
    const collection = get(collectionState);
    const collectionCursor = get(collectionCursorState);

    const q = fstore.collection(collection);
    if (collectionCursor)
      q.startAt(collectionCursor);
    const docs = await q
      .limit(10)
      .get();
    return docs.docs;
  },
});
export const documentState = atom({
  key: 'document',
  default: null,
});
