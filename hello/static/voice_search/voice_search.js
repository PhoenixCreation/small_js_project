// DOM ELEMENTS
const voicebutton = document.getElementById('voice')
const op = document.getElementById('op')

// SPEECH TO text

const speechreco = window.SpeechRecognition || window.webkitSpeechRecognition
try {
  // CREATE A INSTANCE OF SpeechRecognition
  const speech = new speechreco()

  // TO BE CALLED EVERY TIME VOICE TO TEXT STARTS
  speech.onstart = function () {
    console.log("voice search started");
  }

  // CALLED EVERY TIME RESULT IS READY FROM SPEECH TO TEXT
  speech.onresult = function (event) {
    const current = event.resultIndex
    const transscript = event.results[current][0].transcript
    op.innerHTML = transscript
  }

  // ADDING EVENT LISTNER ON BUTTON
  voicebutton.addEventListener('click', () => {
    speech.start()
  })
}

//MOSTLY THIS WILL BE CALLED IF BROWSER DOES NOT HAVE COMPABILITY WITH SpeechRecognition
// IF ANYTHING GOES WRONG, DISABLE THE BUTTON
catch (e) {
  //THIS IS VARIABLE THAT STORES THE VALUE OF 'MUTED MIC' FROM BOOTSTRAP ICONS
  var micnot = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-mic-mute-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963L11 7.879zM5 6.12l4.486 4.486A3 3 0 0 1 5 8V6.121zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z"/></svg>'
  voicebutton.innerHTML = micnot
  //NO MORE VOICE SEARCHING FOR USER
  voicebutton.disabled = true
}
