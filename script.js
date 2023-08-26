let mediaRecorder;
let audioChunks = [];
const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const playButton = document.getElementById('playButton');
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

        // Store the audioBlob in local storage as a Base64-encoded string
        const reader = new FileReader();
        reader.onload = function() {
          const audioDataUrl = reader.result;
          localStorage.setItem('recordedAudio', audioDataUrl);
        };
        reader.readAsDataURL(audioBlob);

        audioElement.src = URL.createObjectURL(audioBlob);
        playButton.disabled = false;
      };
    });
}

recordButton.addEventListener('click', () => {
  mediaRecorder.start();
  recordButton.disabled = true;
  stopButton.disabled = false;
  playButton.disabled = true;
  audioChunks = [];
});

stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
  recordButton.disabled = false;
  stopButton.disabled = true;
});

playButton.addEventListener('click', () => {
  const recordedAudioDataUrl = localStorage.getItem('recordedAudio');
  if (recordedAudioDataUrl) {
    audioElement.src = recordedAudioDataUrl;
    audioElement.play();
  }
});

function abha(){
  location.replace("abha.html");
}
