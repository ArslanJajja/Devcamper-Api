// @desc get all bootcamps
// @route GET/api/v1/bootcamps
// @acess public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc get single bootcamp
// @route GET/api/v1/bootcamps/:id
// @acess public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show single bootcamp ${req.params.id}` });
};

// @desc create new bootcamp
// @route POST/api/v1/bootcamps/:id
// @acess private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

// @desc update single bootcamp
// @route PUT/api/v1/bootcamps/:id
// @acess private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update single bootcamp ${req.params.id}` });
};

// @desc delete single bootcamp
// @route DELETE/api/v1/bootcamps/:id
// @acess private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete single bootcamp ${req.params.id}` });
};
