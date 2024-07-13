document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("myAudio");
  var playButton = document.getElementById("start");

  // Check if the audio can play automatically
  audio.play().catch(function (error) {
    console.log("Autoplay prevented:", error);
    // Show the play button
    playButton.style.display = "block";
  });

  // Play audio on button click
  playButton.addEventListener("click", function () {
    audio
      .play()
      .then(function () {
        // Hide the play button if the audio plays successfully
        playButton.style.display = "none";
      })
      .catch(function (error) {
        console.log("Failed to play audio:", error);
      });
  });
});
