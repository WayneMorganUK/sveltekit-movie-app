import { i as isTheme } from "../../chunks/theme-d5dc0345.js";
import "../../chunks/stores-bf708f99.js";
import "../../chunks/index-bac2f3ba.js";
import "../../chunks/index-d650715d.js";
const put = async ({ request }) => {
  const theme = await request.text();
  if (!isTheme(theme)) {
    return {
      status: 400,
      body: `not a valid theme value: ${theme}`
    };
  }
  return {
    headers: {
      "Set-Cookie": `theme=${theme}; SameSite=Strict; HttpOnly; Secure`
    }
  };
};
const del = async () => ({
  status: 204,
  headers: {
    "Set-Cookie": `theme= ; Max-Age=0; SameSite=Strict; HttpOnly; Secure`
  }
});
export { del, put };
