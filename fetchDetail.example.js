import { fetchDetail } from "./fetchDetail.js";
import { parseDetail } from "./parseDetail.js";

const seqCorp = parseInt(Deno.args[0] || "30000");
const txt = await fetchDetail(seqCorp);
await Deno.writeTextFile("./temp/" + seqCorp + ".html", txt);
const data = parseDetail(txt);
console.log(data);
