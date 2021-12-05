exports.getMyList = async (req, res, next) => {
  const myList = req.user.myList;
  res.status(200).json({
    success: true,
    data: myList,
  });
};

exports.deleteMyListItem = async (req, res, next) => {
  const user = req.user;
  const { id } = req.body;
  user.myList.pull(id);
  await user.save();
  res.status(200).json({
    success: true,
    myList: user.myList,
  });
};

exports.addMyListItem = async (req, res, next) => {
  const user = req.user;
  const { id } = req.body;
  user.myList.addToSet(id);
  await user.save();
  res.status(200).json({
    success: true,
    myList: user.myList,
  });
};
