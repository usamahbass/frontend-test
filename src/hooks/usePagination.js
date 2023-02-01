import useSWRInfinite from "swr/infinite";

export const usePagination = (url) => {
  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1;

    if (previousPageData && !previousPageData?.length) return null;

    return `${url}?page=${pageIndex}`;
  };

  const { data, size, setSize, error, mutate } = useSWRInfinite(getKey);

  const paginatedDate = data?.flat();

  const isReachedEnd = data && data[data?.length - 1]?.length < 6;

  const isLoadingMore = data && typeof data[size - 1] === "undefined";

  return {
    paginatedDate,
    isReachedEnd,
    isLoadingMore,
    size,
    setSize,
    error,
    mutate,
  };
};
