import { CSV } from "https://js.sabae.cc/CSV.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";
import { ZenkakuAlpha } from "https://code4fukui.github.io/mojikiban/ZenkakuAlpha.js";

const toHalfObject = (obj) => {
  for (const name in obj) {
    const v = obj[name];
    obj[name] = ZenkakuAlpha.toHan(v);
  }
};

const srcfn = "koeki-corps-details.csv";

const list = await CSV.fetchJSON(srcfn);
const list2 = [];
for (let i = list.length - 1; i >= 0; i--) {
  const item = list[i];
  if (list2.find(i => i["法人コード"] == item["法人コード"])) continue;
  if (!item.法人の名称) continue;
  if (item.行政庁.indexOf("テスト") >= 0) continue;
  if (item.行政庁.indexOf("ゲスト") >= 0) continue;
  toHalfObject(item);
  list2.unshift(item);
}
console.log(list2.length); // 27758(重複あり) → 22846(重複は新しい方を使う)
// seqCorp,法人コード,法人の名称,法人の名称フリガナ,法人区分,行政庁,法人番号(JCN),郵便番号,主たる事務所の住所,代表電話番号,代表者の氏名,ホームページアドレス,事業年度,事業の種類,事業の概要,税額控除に係る証明
const cates = ["法人区分", "行政庁"]; // 事業年度,事業の種類
for (const cate of cates) {
  const list3 = ArrayUtil.toUnique(list2.map(i => i[cate]));
  console.log(cate, list3.length);
  console.log(list3);
  for (const name of list3) {
    const list4 = list2.filter(i => i[cate] == name);
    console.log(name, list4.length);
  }
  console.log();
}

// 法人区分 == "－" 謎？
//console.log(list2.filter(i => i["法人区分"] == "－")); // すでに存在しない？
//console.log(ArrayUtil.toUnique(list2.filter(i => i["法人区分"] == "－").map(i => i["行政庁"]))); // 法人区分 == "－" 全国全部ありそう

// 行政区 == ""、謎？
//console.log(list2.filter(i => i["行政庁"] == ""));
//console.log(ArrayUtil.toUnique(list2.filter(i => i["行政庁"] == "").map(i => i["法人区分"]))); // 行政区 == ""、法人区分は [ "一般社団法人", "一般財団法人" ] のみ

/* 法人区分
一般社団法人 6025
公益財団法人 6785
一般社団法人である移行法人 3074
一般財団法人 2010
公益社団法人 4796
一般財団法人である移行法人 3378
－ 1155
特例社団法人 281
特例財団法人 243
一般法人設立予定団体 11
*/

await Deno.writeTextFile("koeki-zaidan.csv", CSV.stringify(list2.filter(i => i["法人区分"] == "公益財団法人" && i["行政区"] != "")));
