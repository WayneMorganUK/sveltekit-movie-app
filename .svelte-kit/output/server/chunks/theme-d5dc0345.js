import { s as session } from "./stores-bf708f99.js";
import { d as derived } from "./index-d650715d.js";
var Theme;
(function(Theme2) {
  Theme2["Light"] = "light";
  Theme2["Dark"] = "dark";
})(Theme || (Theme = {}));
const isTheme = (theme2) => Object.values(Theme).includes(theme2);
const theme = derived(session, ($session, set) => {
  console.log("session theme", $session.theme);
  if ($session.theme) {
    set($session.theme);
  }
});
export { Theme as T, isTheme as i, theme as t };
