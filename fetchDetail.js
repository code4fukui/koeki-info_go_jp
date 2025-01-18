import { header_detail, payload_detail } from "./survey.js";

const txt2obj = (s) => {
  const ss = s.split("\n");
  const obj = {};
  for (const s of ss) {
    const n = s.indexOf(": ");
    if (n < 0) continue;
    const name = s.substring(0, n);
    obj[name] = s.substring(n + 2);
  }
  return obj;
};

const makeURLAndOptions = (header) => {
  const param = txt2obj(header);
  const method = param[":method"];
  const url = param[":scheme"] + "://" + param[":authority"] + param[":path"];
  const param2 = {};
  for (const name in param) {
      console.log(name, name[0], "delete", name[0] == ":")
    if (name[0] != ":") {
      //param2[name] = encodeURIComponent(param[name]);
      param2[name] = param[name];
    }
  }
  console.log(param2)
  const options = {
    method,
    headers: param2,
  };
  return { url, options };
};

const makePayload = (payload, setdata = {}) => {
  const param = txt2obj(payload);
  for (const name in setdata) {
    param[name] = encodeURIComponent(setdata[name]);
  }
  const ss = [];
  for (const name in param) {
    ss.push(name + "=" + encodeURIComponent(param[name]));
  }
  const s = ss.join("&");
  const bin = new TextEncoder().encode(s);
  return bin;
};

export const fetchDetail = async (corpSeq) => {
  const { url, options } = makeURLAndOptions(header_detail);
  const payload = makePayload(payload_detail, { corpSeq });
  options.body = payload;
  if (options.headers["content-length"] != payload.length) {
    //console.log("content-length changed", options.headers["content-length"], "->", payload.length);
    options.headers["content-length"] = payload.length;
  }
  const txt = await (await fetch(url, options)).text();
  return txt;
};
