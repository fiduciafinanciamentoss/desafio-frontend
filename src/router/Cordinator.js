export const goBack = (history) => {
  history.goBack();
};

export const goToPage = (history, path) => {
  history.push(path);
};
