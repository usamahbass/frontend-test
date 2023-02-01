import formatDistance from "date-fns/formatDistance";

export const convertFormatDistance = (date) => {
  if (date) {
    const formatDate = formatDistance(new Date(), new Date(date), {
      addSuffix: true,
    });

    return formatDate;
  }

  return "-";
};
