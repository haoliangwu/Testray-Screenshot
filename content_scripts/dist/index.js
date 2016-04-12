'use strict';

var metadata = {
  folderName: '6.2 Fix Pack AA 2015',
  fileName: ' 62 Fixpack AA - Apr 2016',
  sheetName: ' demo1'
};

var resultList = [];

// sync
chrome.storage.local.get('resultList', function (data) {
  if (data.resultList) {
    resultList = resultList.concat(data.resultList);
    console.log('Sync resultList to');
    console.log(resultList);
  }
});

$(document).ready(function () {

  var comparePanel = $('.button-holder:last');
  var screenshotButton = $('<button class="btn control-button btn-primary">Screenshot</button>');

  screenshotButton.click(function () {
    // init
    var info = {
      RunA: {},
      RunB: {}
    };
    var result = [];
    // info
    var infoPanel = $('.span8 fieldset');['RunA', 'RunB'].forEach(function (run, i) {
      var runPanel = infoPanel.eq(i);

      var link = runPanel.find('.column a').eq(0);

      info[run].link = {
        text: link.text(),
        href: link.attr('href')
      };['title', 'name', 'build', 'env'].forEach(function (e, i) {
        var text = runPanel.find('.column div.field-wrapper').eq(i).text();
        info[run][e] = text.split('  ').pop();
      });
    });

    // overview
    var overviewPanel = $('.span4');
    var overviewTableHTML = overviewPanel.html();

    // result
    var resultTable = $('.table-data');
    var trList = resultTable.find('tr');

    trList.each(function (i) {
      if ($(this).attr('class') === 'lfr-template') {
        return;
      }

      var tdList = $(this).find('td');
      var temp = [i];

      tdList.each(function (i) {
        if (i === 3 || i === 4) {
          temp.push({
            text: $(this).text(),
            link: $(this).find('a').attr('href')
          });
        } else {
          temp.push($(this).text());
        }
      });

      result.push(temp);
    });

    // 单次快照结果
    resultList.push({
      info: info,
      result: result,
      overview: overviewTableHTML,
      _time: new Date()
    });

    if (result.length > 0) {
      chrome.storage.local.set({ resultList: resultList }, function () {
        console.log('The result screenshot has been saved !! The resultList is:');
        console.log(resultList);
      });
    } else {
      alert('The result table is null, please process Compare Runs first.');
    }

    // cancel default behavir
    return false;
  });

  comparePanel.append(screenshotButton);
});