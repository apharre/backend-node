/* eslint-disable no-useless-escape */
function collectionSelection(queryString) {
  const collection = queryString.match(/(?<=\<\s*).*?(?=\s*>)/gs); // Same but whitespaces are optional
  return collection;
}

function removeCollection(queryString) {
  return queryString.replace(/ *\<[^)]*\> */g, '');
}

export { collectionSelection, removeCollection };
