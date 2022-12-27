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
  t.assetData = [
    ["現金", 500],
    ["Suica", 5000],
    ["Paypay", 10000],
    ["ゆうちょ", 1000000],
    ["みずほ銀行", 100000]
  ];
  t.debtData = [
    ["クレジットカード", 50000]
  ];
  t.reserveFundData = [
    ["美容積立資金", 700000],
    ["旅行積立資金", 50000],
    ["引越積立資金", 300000],
    ["プレゼント積立資金", 15500]
  ];
  return t.evaluate();
}