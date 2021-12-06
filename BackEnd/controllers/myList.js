exports.getMyListMovie = async (req, res, next) => {
  const myListMovie = req.user.myListMovie;
  res.status(200).json({
    success: true,
    data: myListMovie,
  });
};

exports.deleteMyListMovieItem = async (req, res, next) => {
  const user = req.user;
  const { id } = req.body;
  user.myListMovie.pull(id);
  await user.save();
  res.status(200).json({
    success: true,
    myListMovie: user.myListMovie,
  });
};

exports.addMyListMovieItem = async (req, res, next) => {
  const user = req.user;
  const { id } = req.body;
  user.myListMovie.addToSet(id);
  await user.save();
  res.status(200).json({
    success: true,
    myListMovie: user.myListMovie,
  });
};

exports.getMyListSeries = async (req, res, next) => {
  const myListSeries = req.user.myListSeries;
  res.status(200).json({
    success: true,
    data: myListSeries,
  });
};

exports.deleteMyListSeriesItem = async (req, res, next) => {
  const user = req.user;
  const { id } = req.body;
  user.myListSeries.pull(id);
  await user.save();
  res.status(200).json({
    success: true,
    myListSeries: user.myListSeries,
  });
};

exports.addMyListSeriesItem = async (req, res, next) => {
  const user = req.user;
  const { id } = req.body;
  user.myListSeries.addToSet(id);
  await user.save();
  res.status(200).json({
    success: true,
    myListSeries: user.myListSeries,
  });
};
