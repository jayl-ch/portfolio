export const dark = (isDark: boolean) => {
  const body = document.body;

  if (isDark === true) {
    body.style.backgroundColor = "#000";
  } else {
    body.style.backgroundColor = "#fff";
  }
};
