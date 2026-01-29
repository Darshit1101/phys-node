const getPagination = (query) => {
  let page = Number(query.page);
  let limit = Number(query.limit);

  if (!page || page < 1) page = 1;
  if (!limit || limit < 1) limit = 10;

  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
};

export default getPagination;
