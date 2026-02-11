//TIMER

// Get timer elements
const dayBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

// Set target date (10 days from now)
const now = new Date();
const targetDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);

function updateTimer() {
  const currentTime = new Date();
  const timeLeft = targetDate - currentTime;

  if (timeLeft <= 0) {
    clearInterval(interval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  dayBox.textContent = days;
  hoursBox.textContent = hours;
  minutesBox.textContent = minutes;
  secondsBox.textContent = seconds;
}

const interval = setInterval(updateTimer, 1000);
updateTimer();


// REGISTRATION POPUP
document.addEventListener("DOMContentLoaded", function(){

  let registerCount = 0;

  const registerBtn = document.getElementById("registerBtn");
  const modal = document.getElementById("registerModal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("registerForm");
  const successMsg = document.getElementById("successMsg");

  registerBtn.onclick = () => {
    modal.style.display = "flex";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  form.onsubmit = (e) => {
    e.preventDefault();

    registerCount++;

    successMsg.innerHTML =
      ` You are number <strong>${registerCount}</strong> registered!`;
    successMsg.style.display = "block";

    form.reset();
  };

});
