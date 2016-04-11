const metadata = {
  folderName: '6.2 Fix Pack AA 2015',
  fileName: ' 62 Fixpack AA - Apr 2016',
  sheetName: ' demo1'
}

const resultList = []

$(document).ready(() => {
  const info = {
    RunA: {},
    RunB: {}
  }
  const result = []

  const comparePanel = $('.button-holder:last')
  const screenshotButton = $(`<button class="btn control-button btn-primary">Screenshot</button>`)

  screenshotButton.click(() => {
    // info
    const infoPanel = $('.span8 fieldset')
    ;['RunA', 'RunB'].forEach((run, i) => {
      const runPanel = infoPanel.eq(i)

      const link = runPanel.find('.column a').eq(0)

      info[run].link = {
        text: link.text(),
        href: link.attr('href')
      }

      ;['title', 'name', 'build', 'env'].forEach((e, i) => {
        const text = runPanel.find('.column div.field-wrapper').eq(i).text()
        info[run][e] = text.split('  ').pop()
      })
    })

    // result
    const resultTable = $('.table-data')
    const trList = resultTable.find('tr')

    trList.each(function (i) {
      if ($(this).attr('class') === 'lfr-template') {
        return
      }

      const tdList = $(this).find('td')
      const temp = [i]

      tdList.each(function (i) {
        if (i === 3 || i === 4) {
          temp.push(
            {
              text: $(this).text(),
              link: $(this).find('a').attr('href')
            })
        } else {
          temp.push($(this).text())
        }
      })

      result.push(temp)
    })

    // 单次快照结果
    resultList.push({
      info: info,
      result: result
    })

    if (result.length > 0) {
      chrome.storage.local.set({resultList}, function () {
        console.log(`The result screenshot has been saved !!`)
      })
    } else {
      alert(`The result table is null, please process Compare Runs first.`)
    }

    // cancel default behavir
    return false
  })

  comparePanel.append(screenshotButton)
})
