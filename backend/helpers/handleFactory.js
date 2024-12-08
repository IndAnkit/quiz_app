const catchAsync = require("../utils/catchAsync");
const { success } = require("../utils/responseHandler");

exports.getAll = (Model, callback) => {
  return catchAsync(async (req, res) => {
    const branches = await Model.findAll();
    success({
      res,
      data: branches,
    });
  });
};
