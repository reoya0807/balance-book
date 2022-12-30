function doGet() {
  // デバッグ用の型出力
  Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};
  var t = HtmlService.createTemplateFromFile('index');
  var sheet = SpreadsheetApp
    .openById('1K7EG0h0Qz5qcIC5SgQ73gGKgRNHfu0mgmCqQ2HeuXNI')
    .getActiveSheet();
  var lastRow = sheet.getLastRow();
  t.data = sheet
    .getRange(4, 1, (lastRow - 3), 4)
    .getValues();
  // デバッグ用の型出力
  console.log(t.data[0][0].getName());

  // テスト用データ
  const balanceData = {
    "assetData": [{
      "entryName": "現金",
      "amount": 500
    }, {
      "entryName": "Suica",
      "amount": 5000
    }, {
      "entryName": "Paypay",
      "amount": 10000
    }, {
      "entryName": "ゆうちょ",
      "amount": 1000000
    }, {
      "entryName": "みずほ銀行",
      "amount": 10000
    }],
    "debtData": [{
      "entryName": "クレジットカード",
      "amount": 50000
    }],
    "reserveFundData": [{
      "entryName": "美容積立資金",
      "amount": 700000
    }, {
      "entryName": "旅行積立資金",
      "amount": 50000
    }, {
      "entryName": "引越積立資金",
      "amount": 300000
    }, {
      "entryName": "プレゼント積立資金",
      "amount": 15500
    }]
  };
  t.balanceData = balanceData;
  return t.evaluate();
}