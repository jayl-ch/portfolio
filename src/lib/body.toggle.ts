export const setDark = (isDark: boolean) => {
  const body = document.body;

  if (isDark) {
    localStorage.setItem("theme", "dark");
    body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "");
    body.classList.remove("dark");
  }
};
