function doGet() {
  // デバッグ用の型出力
  Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};
  var t =HtmlService.createTemplateFromFile('index');
  var sheet = SpreadsheetApp
    .openById('1K7EG0h0Qz5qcIC5SgQ73gGKgRNHfu0mgmCqQ2HeuXNI')
    .getActiveSheet();
  var lastRow = sheet.getLastRow();
  t.data = sheet
    .getRange(4, 1, (lastRow - 3), 4)
    .getValues();
  // デバッグ用の型出力
  console.log(t.data[0][0].getName());
  return t.evaluate();
}