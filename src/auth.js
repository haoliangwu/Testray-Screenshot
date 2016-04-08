var access_token = ''
var SCRIPT_ID = 'M8zl4I6L-BHpH1xCEsoJx-n_tTAa9uzBQ'

function handleGoogleDocUpdate () {
  chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
    // Use the token.
    access_token = token
    console.log(access_token)

    var data = {
      'function': 'test',
      'parameters': [
        [], // rows
        {} // metadata
      ]
    // ,'devMode': true
    }

    var url = `https://script.googleapis.com/v1/scripts/` + SCRIPT_ID + `:run`

    $.ajax({
      type: 'POST',
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
      url: url,
      dataType: 'json',
      data: data,
      success: function (data) {
        console.log(data)
      },
      error: function (err) {
        console.log(err)
      }
    })
  })
}
