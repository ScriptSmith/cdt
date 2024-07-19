const DEFAULT_COLOR = "dark";

const input = document.querySelector("#iconColor");
browser.storage.local
  .get("iconColor")
  .then(({ iconColor }) => (input.value = iconColor ?? DEFAULT_COLOR));
input.onchange = (e) =>
  browser.storage.local.set({ iconColor: e.target.value });
