import { sleep } from "https://js.sabae.cc/sleep.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { parseDetail } from "./parseDetail.js";
import { fetchDetail } from "./fetchDetail.js";

const fn = "koeki-corps-details.csv";
const list = await CSV.fetchJSON(fn, []);
const start = 1;
const end = 30000; // 9999
for (let i = start; i <= end; i++) {
  const html = await fetchDetail(i);
  const data = parseDetail(html);
  console.log(data);
  data.seqCorp = i;
  list.push(data);
  await Deno.writeTextFile(fn, CSV.stringify(list));
  await sleep(Math.random() * 1000 + 1000);
}
