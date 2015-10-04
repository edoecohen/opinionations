var microphone
var uuid

uuid = 'fakeUuid'
enableSubmission()
/* For now, mock that this works
chrome.cookies.get({
    url: 'http://www.opinionations.co/',
    name: 'uuid'
}, function(cookie) {
    if (cookie) {
        uuid = cookie.uuid
        enableSubmission()
    }
})
*/

$('.permissions').click(function() {
    chrome.tabs.create({url: '/options.html' })
})

$('#record').click(onRecord)
$('#stop').click(onStop)
$('#play').click(onPlay)
$('#pause').click(onPause)
$('#form').on('submit', function(e) {
    e.preventDefault()
    e.stopPropagation()

    microphone.extractWAV(function(blob) {
        $.post('http://www.opinionations.co/recordings/' + uuid, blob)
    })
})

function enableSubmission(uuid) {
    // Hide login
    $('.login').hide()

    mic(function(err, m) {
        if (err) {
            $('.permissions').show()
            throw err
        }

        microphone = m

        // Show recorder
        $('.recorder').show()
    }, {workerPath: '/lib/recorder/recorderWorker.js'})
}

function onRecord() {
    microphone.record()

    $('#record').hide()
    $('#stop').show()
    $('#play').hide()
    $('#pause').hide()
    $('#submitter').hide()
}

function onStop() {
    microphone.stop()

    $('#record').show()
    $('#stop').hide()
    $('#play').show()
    $('#pause').hide()
    $('#submitter').show()
}

function onPlay() {
    microphone.play()

    $('#record').hide()
    $('#stop').hide()
    $('#play').hide()
    $('#pause').show()
    $('#submitter').show()
}

function onPause() {
    microphone.pause()

    $('#record').show()
    $('#stop').hide()
    $('#play').show()
    $('#pause').hide()
    $('#submitter').show()
}
