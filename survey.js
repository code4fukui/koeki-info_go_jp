export const header = `
:authority: www.koeki-info.go.jp
:method: POST
:path: /pictis-info/csa0001!showSearchResult
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding: gzip, deflate, br, zstd
accept-language: ja
cache-control: max-age=0
content-length: 8465
content-type: application/x-www-form-urlencoded
cookie: JSESSIONID=22A8DA0E817BB3A3993D05C4BD3AFA6D
origin: https://www.koeki-info.go.jp
priority: u=0, i
referer: https://www.koeki-info.go.jp/pictis-info/csa0001!show
sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
`;

// <input type="hidden" name="token" value="7QP936BTMLS5N16RBV884G500HIM2KID" />

export const payload = `
struts.token.name: token
token: 6Z598TFSSCB952BAPLXYTNQEQ0CH2F2O
stateTabFlag: 
statePanelFlag: 
storeAccordionFlag: 
storeAccordionFlag2: 
storeAccordionFlag3: 
storeAccordionFlag4: 
sourceMapDownload: 
seqNumber: 
prefCode: 
fileUPloadUpperSize: 5242880
fileUPloadUpperErrorMessage: 添付ファイルはファイル制限を越えています。{0}MB以内のファイルを添付してください。
corpDivision: 20
corpNumber: 
corpCode: 
corpName: 
addr: 
__multiselect_businessKindSelectedList: 
businessOverview: 
prefAgencyListAll[0].checked: true
__checkbox_prefAgencyListAll[0].checked: true
prefAgencyListAll[0].prefAgencyName: 全て
prefAgencyListAll[0].prefAgencyCode: 9999
__checkbox_prefAgencyList0[0].checked: true
prefAgencyList0[0].prefAgencyName: 内閣府
prefAgencyList0[0].prefAgencyCode: 0000
__checkbox_prefAgencyList1[0].checked: true
prefAgencyList1[0].prefAgencyName: 北海道
prefAgencyList1[0].prefAgencyCode: 0001
__checkbox_prefAgencyList2[0].checked: true
prefAgencyList2[0].prefAgencyName: 青森県
prefAgencyList2[0].prefAgencyCode: 0002
__checkbox_prefAgencyList2[1].checked: true
prefAgencyList2[1].prefAgencyName: 岩手県
prefAgencyList2[1].prefAgencyCode: 0003
__checkbox_prefAgencyList2[2].checked: true
prefAgencyList2[2].prefAgencyName: 宮城県
prefAgencyList2[2].prefAgencyCode: 0004
__checkbox_prefAgencyList2[3].checked: true
prefAgencyList2[3].prefAgencyName: 秋田県
prefAgencyList2[3].prefAgencyCode: 0005
__checkbox_prefAgencyList2[4].checked: true
prefAgencyList2[4].prefAgencyName: 山形県
prefAgencyList2[4].prefAgencyCode: 0006
__checkbox_prefAgencyList2[5].checked: true
prefAgencyList2[5].prefAgencyName: 福島県
prefAgencyList2[5].prefAgencyCode: 0007
__checkbox_prefAgencyList3[0].checked: true
prefAgencyList3[0].prefAgencyName: 茨城県
prefAgencyList3[0].prefAgencyCode: 0008
__checkbox_prefAgencyList3[1].checked: true
prefAgencyList3[1].prefAgencyName: 栃木県
prefAgencyList3[1].prefAgencyCode: 0009
__checkbox_prefAgencyList3[2].checked: true
prefAgencyList3[2].prefAgencyName: 群馬県
prefAgencyList3[2].prefAgencyCode: 0010
__checkbox_prefAgencyList3[3].checked: true
prefAgencyList3[3].prefAgencyName: 埼玉県
prefAgencyList3[3].prefAgencyCode: 0011
__checkbox_prefAgencyList3[4].checked: true
prefAgencyList3[4].prefAgencyName: 千葉県
prefAgencyList3[4].prefAgencyCode: 0012
__checkbox_prefAgencyList3[5].checked: true
prefAgencyList3[5].prefAgencyName: 東京都
prefAgencyList3[5].prefAgencyCode: 0013
__checkbox_prefAgencyList3[6].checked: true
prefAgencyList3[6].prefAgencyName: 神奈川県
prefAgencyList3[6].prefAgencyCode: 0014
__checkbox_prefAgencyList4[0].checked: true
prefAgencyList4[0].prefAgencyName: 新潟県
prefAgencyList4[0].prefAgencyCode: 0015
__checkbox_prefAgencyList4[1].checked: true
prefAgencyList4[1].prefAgencyName: 山梨県
prefAgencyList4[1].prefAgencyCode: 0019
__checkbox_prefAgencyList4[2].checked: true
prefAgencyList4[2].prefAgencyName: 長野県
prefAgencyList4[2].prefAgencyCode: 0020
__checkbox_prefAgencyList5[0].checked: true
prefAgencyList5[0].prefAgencyName: 富山県
prefAgencyList5[0].prefAgencyCode: 0016
__checkbox_prefAgencyList5[1].checked: true
prefAgencyList5[1].prefAgencyName: 石川県
prefAgencyList5[1].prefAgencyCode: 0017
__checkbox_prefAgencyList5[2].checked: true
prefAgencyList5[2].prefAgencyName: 福井県
prefAgencyList5[2].prefAgencyCode: 0018
__checkbox_prefAgencyList6[0].checked: true
prefAgencyList6[0].prefAgencyName: 岐阜県
prefAgencyList6[0].prefAgencyCode: 0021
__checkbox_prefAgencyList6[1].checked: true
prefAgencyList6[1].prefAgencyName: 静岡県
prefAgencyList6[1].prefAgencyCode: 0022
__checkbox_prefAgencyList6[2].checked: true
prefAgencyList6[2].prefAgencyName: 愛知県
prefAgencyList6[2].prefAgencyCode: 0023
__checkbox_prefAgencyList6[3].checked: true
prefAgencyList6[3].prefAgencyName: 三重県
prefAgencyList6[3].prefAgencyCode: 0024
__checkbox_prefAgencyList7[0].checked: true
prefAgencyList7[0].prefAgencyName: 滋賀県
prefAgencyList7[0].prefAgencyCode: 0025
__checkbox_prefAgencyList7[1].checked: true
prefAgencyList7[1].prefAgencyName: 京都府
prefAgencyList7[1].prefAgencyCode: 0026
__checkbox_prefAgencyList7[2].checked: true
prefAgencyList7[2].prefAgencyName: 大阪府
prefAgencyList7[2].prefAgencyCode: 0027
__checkbox_prefAgencyList7[3].checked: true
prefAgencyList7[3].prefAgencyName: 兵庫県
prefAgencyList7[3].prefAgencyCode: 0028
__checkbox_prefAgencyList7[4].checked: true
prefAgencyList7[4].prefAgencyName: 奈良県
prefAgencyList7[4].prefAgencyCode: 0029
__checkbox_prefAgencyList7[5].checked: true
prefAgencyList7[5].prefAgencyName: 和歌山県
prefAgencyList7[5].prefAgencyCode: 0030
__checkbox_prefAgencyList8[0].checked: true
prefAgencyList8[0].prefAgencyName: 鳥取県
prefAgencyList8[0].prefAgencyCode: 0031
__checkbox_prefAgencyList8[1].checked: true
prefAgencyList8[1].prefAgencyName: 島根県
prefAgencyList8[1].prefAgencyCode: 0032
__checkbox_prefAgencyList8[2].checked: true
prefAgencyList8[2].prefAgencyName: 岡山県
prefAgencyList8[2].prefAgencyCode: 0033
__checkbox_prefAgencyList8[3].checked: true
prefAgencyList8[3].prefAgencyName: 広島県
prefAgencyList8[3].prefAgencyCode: 0034
__checkbox_prefAgencyList8[4].checked: true
prefAgencyList8[4].prefAgencyName: 山口県
prefAgencyList8[4].prefAgencyCode: 0035
__checkbox_prefAgencyList9[0].checked: true
prefAgencyList9[0].prefAgencyName: 徳島県
prefAgencyList9[0].prefAgencyCode: 0036
__checkbox_prefAgencyList9[1].checked: true
prefAgencyList9[1].prefAgencyName: 愛媛県
prefAgencyList9[1].prefAgencyCode: 0038
__checkbox_prefAgencyList9[2].checked: true
prefAgencyList9[2].prefAgencyName: 香川県
prefAgencyList9[2].prefAgencyCode: 0037
__checkbox_prefAgencyList9[3].checked: true
prefAgencyList9[3].prefAgencyName: 高知県
prefAgencyList9[3].prefAgencyCode: 0039
__checkbox_prefAgencyList10[0].checked: true
prefAgencyList10[0].prefAgencyName: 福岡県
prefAgencyList10[0].prefAgencyCode: 0040
__checkbox_prefAgencyList10[1].checked: true
prefAgencyList10[1].prefAgencyName: 佐賀県
prefAgencyList10[1].prefAgencyCode: 0041
__checkbox_prefAgencyList10[2].checked: true
prefAgencyList10[2].prefAgencyName: 長崎県
prefAgencyList10[2].prefAgencyCode: 0042
__checkbox_prefAgencyList10[3].checked: true
prefAgencyList10[3].prefAgencyName: 熊本県
prefAgencyList10[3].prefAgencyCode: 0043
__checkbox_prefAgencyList10[4].checked: true
prefAgencyList10[4].prefAgencyName: 大分県
prefAgencyList10[4].prefAgencyCode: 0044
__checkbox_prefAgencyList10[5].checked: true
prefAgencyList10[5].prefAgencyName: 宮崎県
prefAgencyList10[5].prefAgencyCode: 0045
__checkbox_prefAgencyList10[6].checked: true
prefAgencyList10[6].prefAgencyName: 鹿児島県
prefAgencyList10[6].prefAgencyCode: 0046
__checkbox_prefAgencyList10[7].checked: true
prefAgencyList10[7].prefAgencyName: 沖縄県
prefAgencyList10[7].prefAgencyCode: 0047
`;

export const header_nextpage = `
:authority: www.koeki-info.go.jp
:method: POST
:path: /pictis-info/csa0002!nextShow
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding: gzip, deflate, br, zstd
accept-language: ja
cache-control: max-age=0
content-length: 1203
content-type: application/x-www-form-urlencoded
cookie: JSESSIONID=22A8DA0E817BB3A3993D05C4BD3AFA6D
origin: https://www.koeki-info.go.jp
priority: u=0, i
referer: https://www.koeki-info.go.jp/pictis-info/csa0001!showSearchResult
sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
`;

export const payload_nextpage = `
struts.token.name: token
token: PE7COXS42PWKJ2499GBUIXMFK6B7C8FW
stateTabFlag: 
statePanelFlag: 
storeAccordionFlag: 
storeAccordionFlag2: 
storeAccordionFlag3: 
storeAccordionFlag4: 
sourceMapDownload: 
seqNumber: 
prefCode: 
fileUPloadUpperSize: 5242880
fileUPloadUpperErrorMessage: 添付ファイルはファイル制限を越えています。{0}MB以内のファイルを添付してください。
corpSeq: 
pageIndex: 1
selectedPageIndex: 
sortColumnList[0].number: 0
sortColumnList[0].columnName: corp_name
sortColumnList[0].order: asc
sortColumnList[1].number: 1
sortColumnList[1].columnName: pref_code
sortColumnList[1].order: asc
sortHeaderNumber: 
orderByCondition[0].number: 0
orderByCondition[0].columnName: corp_name
orderByCondition[0].order: asc
orderByCondition[1].number: 1
orderByCondition[1].columnName: pref_code
orderByCondition[1].order: asc
dispNumber: 100
stateTabFlag: 
statePanelFlag: 
storeAccordionFlag: 
storeAccordionFlag2: 
`;

export const header_detail = `
:authority: www.koeki-info.go.jp
:method: POST
:path: /pictis-info/csa0003!show
:scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding: gzip, deflate, br, zstd
accept-language: ja
cache-control: max-age=0
content-length: 1140
content-type: application/x-www-form-urlencoded
cookie: JSESSIONID=22A8DA0E817BB3A3993D05C4BD3AFA6D
origin: https://www.koeki-info.go.jp
priority: u=0, i
referer: https://www.koeki-info.go.jp/pictis-info/csa0002!nextShow
sec-ch-ua:
"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
`;

// prefCode, corpSeq で指定、prefCode必須？
/*
<a class="corp-name-anchor" href="#" data-menu-number="1"
  data-action="csa0003!show" data-corpseq="5253" data-prefcode="0000">公益財団法人 　ＥＮＥＯＳ東燃ゼネラル研究奨励・奨学会</a>
*/
export const payload_detail = `
struts.token.name: token
token: 7QP936BTMLS5N16RBV884G500HIM2KID
stateTabFlag: 
statePanelFlag: 
storeAccordionFlag: 
storeAccordionFlag2: 
storeAccordionFlag3: 
storeAccordionFlag4: 
sourceMapDownload: 
seqNumber: 
prefCode: 0000
fileUPloadUpperSize: 5242880
fileUPloadUpperErrorMessage: 添付ファイルはファイル制限を越えています。{0}MB以内のファイルを添付してください。
corpSeq: 9920
pageIndex: 3
selectedPageIndex: 
sortColumnList[0].number: 0
sortColumnList[0].columnName: corp_name
sortColumnList[0].order: asc
sortColumnList[1].number: 1
sortColumnList[1].columnName: pref_code
sortColumnList[1].order: asc
sortHeaderNumber: 
orderByCondition[0].number: 0
orderByCondition[0].columnName: corp_name
orderByCondition[0].order: asc
orderByCondition[1].number: 1
orderByCondition[1].columnName: pref_code
orderByCondition[1].order: asc
dispNumber: 100
`;
