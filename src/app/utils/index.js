export const utilsFormatNewsTitle = (titleString) => {
  const title = titleString
    .split("-")
    .map((title) => title.charAt(0).toUpperCase() + title.slice(1))
    .join(" ");

  return title;
};
