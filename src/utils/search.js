const getSearchQuery = (query, searchableFields = []) => {
  const { search } = query;

  if (!search || !searchableFields.length) {
    return {};
  }

  return {
    $or: searchableFields.map((field) => ({
      [field]: { $regex: search, $options: "i" }, // case-insensitive
    })),
  };
};

export default getSearchQuery;
