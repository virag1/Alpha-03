// Global variables
let mediaRecorder;
let audioChunks = [];
const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const audioElement = document.getElementById('audio');

// Check if the browser supports MediaRecorder
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        audioElement.src = URL.createObjectURL(audioBlob);
      };
    });
}

recordButton.addEventListener('click', () => {
  mediaRecorder.start();
  recordButton.disabled = true;
  stopButton.disabled = false;
  audioChunks = [];
});

stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
  recordButton.disabled = false;
  stopButton.disabled = true;
});

function abha(){
    location.replace("abha.html");
}