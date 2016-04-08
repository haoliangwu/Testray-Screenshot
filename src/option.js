import $ from 'jquery'

$(document).ready(() => {
  console.log(1)
  chrome.storage.local.get('resultLatest', (data) => {
    console.log(data)
  })
})
