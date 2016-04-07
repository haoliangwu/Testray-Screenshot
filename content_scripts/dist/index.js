'use strict';

$(document).ready(function () {
  var comparePanel = $('.button-holder:last');

  var screenshotButton = $('<button class="btn control-button btn-primary">Testray Screenshot</button>');

  screenshotButton.click(function () {
    var resultTable = $('.table-data');
    var trList = resultTable.find('tr');

    console.log(trList);

    var result = [];

    trList.each(function () {
      var temp = [];
      var tdList = $(this).find('td');

      tdList.each(function (i) {
        temp.push($(this).text());
      });

      result.push(temp);
    });

    console.log(result);

    // cancel default behavir
    return false;
  });

  comparePanel.append(screenshotButton);
});