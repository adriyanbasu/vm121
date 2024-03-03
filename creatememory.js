const creatememory = (sizeinbites) => {
  const ab = new ArrayBuffer(sizeinbites);
  const db = new DataView(ab);
  return db;
};
module.exports = creatememory;
