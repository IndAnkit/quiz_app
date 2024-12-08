exports.success = ({ res, data, status = 200 }) =>
  res.status(status).json({
    status: "success",
    results: data?.length,
    data: data,
  });
