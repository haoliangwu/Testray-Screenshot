const SCRIPT_ID = 'MChxBX6Ps-9u_YlnM7WLqlNQpCxtej4RD'

const CLIENT_ID = '288837666121-h7kn55j271f2l4ofamonkd4h4inmgj4a.apps.googleusercontent.com'
const SCOPES =
['https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://spreadsheets.google.com/feeds']

function checkAuth () {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult)
}

function handleAuth () {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult)
}

function handleAuthResult (authResult) {
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    console.log('authorize successfully !!')
    loadDriveApi()
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    console.log('authorize failed due to %s !!', authResult.error)
  }
}

function loadDriveApi () {
  gapi.client.load('drive', 'v3', () => {
    console.log('drive api has loaded successfully !!')
  })
}
