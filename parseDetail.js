import { HTMLParser } from "https://code4fukui.github.io/scrapeutil/scrapeutil.js";

const parseTable = (tbl) => {
  const trs = tbl.querySelectorAll("tr");
  const res = {};
  for (const tr of trs) {
    const name = tr.querySelector("th")?.text.trim();
    if (name.length == 0) continue;
    const val = tr.querySelector("td")?.text.trim();
    const test = `var tmp = "`;
    if (val.startsWith(test)) {
      const n = val.indexOf('"', test.length);
      const val2 = val.substring(test.length, n).replace(/_br/g, "\n");
      res[name] = val2;
    } else {
      res[name] = val;
    }
  }
  return res;
};

export const parseDetail = (html) => {
  const dom = HTMLParser.parse(html);
  const tbls = dom.querySelectorAll("table");
  const data = {};
  for (const tbl of tbls) {
    const json = parseTable(tbl);
    Object.assign(data, json);
  }
  return data;

};
/*
const html = await Deno.readTextFile("9920.html");
const data = parseDetail(html);
console.log(data);
*/
