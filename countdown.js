function startCountdown() {
  let countdownValue = 10;

  // Display the initial value
  document.getElementById("countdown").innerHTML = countdownValue;

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Decrease the countdown value by 1
    countdownValue--;

    // Display the updated value
    document.getElementById("countdown").innerHTML = countdownValue;

    // If the countdown is over, stop the timer and display "EXPIRED"
    if (countdownValue <= 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "فوتش کن";
    }
  }, 1000);
}

// Add event listener to the button to start the countdown
document.getElementById("start").addEventListener("click", startCountdown);
