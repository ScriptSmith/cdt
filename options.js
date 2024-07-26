const DEFAULT_COLOR = "dark";

const iconInput = document.querySelector("#iconColor");
browser.storage.local
  .get("iconColor")
  .then(({ iconColor }) => {
    if (iconColor !== "dark" && iconColor !== "light") {
      return;
    }
    iconInput.value = iconColor ?? DEFAULT_COLOR;
  });
iconInput.onchange = (e) =>
  browser.storage.local.set({ iconColor: e.target.value });

const includePinnedInput = document.querySelector("#includePinned");
browser.storage.local
  .get("includePinned")
  .then(({ includePinned }) => (includePinnedInput.value = includePinned));
includePinnedInput.onchange = (e) =>
  browser.storage.local.set({ includePinned: e.target.checked });
