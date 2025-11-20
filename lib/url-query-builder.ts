type QueryParam = string | boolean | null | undefined | Array<string>;

export const urlQueryBuilder = (params: Record<string, QueryParam>) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === "" || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((v) => query.append(key, v));
    } else {
      query.set(key, value);
    }
  });
  return query.toString();
};
