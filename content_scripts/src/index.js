$(document).ready(() => {
  let comparePanel = $('.button-holder:last')

  const screenshotButton = $(`<button class="btn control-button btn-primary">Testray Screenshot</button>`)

  screenshotButton.click(() => {
    const resultTable = $('.table-data')
    const trList = resultTable.find('tr')

    console.log(trList)

    let result = []

    trList.each(function () {
      let temp = []
      const tdList = $(this).find('td')

      tdList.each(function (i) {
        temp.push($(this).text())
      })

      result.push(temp)
    })

    console.log(result)

    // cancel default behavir
    return false
  })

  comparePanel.append(screenshotButton)
})
