export default (req, res) => {
  const {
    query: { tId },
  } = req;
  res.end (`Tag: ${tId}`);
};
