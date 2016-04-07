'use strict';

var metadata = {
  folderName: '6.2 Fix Pack AA 2015',
  fileName: ' 62 Fixpack AA - Apr 2016',
  sheetName: ' demo1'
};

$(document).ready(function () {
  var comparePanel = $('.button-holder:last');

  var screenshotButton = $('<button class="btn control-button btn-primary">Screenshot</button>');

  screenshotButton.click(function () {
    var resultTable = $('.table-data');
    var trList = resultTable.find('tr');

    var result = [];

    trList.each(function () {
      var temp = [];
      var tdList = $(this).find('td');

      tdList.each(function (i) {
        temp.push($(this).text());
      });

      result.push(temp);
    });

    if (result.length > 0) {
      chrome.storage.local.set({ resultLatest: result }, function () {
        console.log('The result screenshot has been saved !!');
      });
    } else {
      alert('The result table is null, please process Compare Runs first.');
    }

    // cancel default behavir
    return false;
  });

  comparePanel.append(screenshotButton);
});