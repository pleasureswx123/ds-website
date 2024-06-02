export default function replaceHtml(html) {
  let result = html.replace(/<[^>]+>/g, "");
  const map = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    "&cent;": "¢",
    "&pound;": "£",
    "&yen;": "¥",
    "&euro;": "€",
    "&copy;": "©",
  };
  for (const key in map) {
    result = result.replace(new RegExp(key, "g"), map[key]);
  }
  return result;
}