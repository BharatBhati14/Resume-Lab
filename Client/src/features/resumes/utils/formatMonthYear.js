export const formatMonthYear = (date) => {
  if (!date) return "";

  const [year, month] = date.split("-");
  const parsedDate = new Date(year, month - 1);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};


// return new Intl.DateTimeFormat("en-US", {
//   month: "short",
//   year: "numeric",
// }).format(parsedDate);

// Output:
// Jun 2026