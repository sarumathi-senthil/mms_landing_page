const countdownDate = new Date("August 22, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

function createSegment(value, label) {
  return `
    <div class="countdown-segment">
      <div class="countdown-box">${value.toString().padStart(2, '0')}</div>
      <div class="countdown-label">${label}</div>
    </div>
  `;
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "<h2 style='color:white;'>EXPIRED</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML =
    createSegment(days, "DAYS") +
    `<div class="colon">:</div>` +
    createSegment(hours, "HOURS") +
    `<div class="colon">:</div>` +
    createSegment(minutes, "MINUTES") +
    `<div class="colon">:</div>` +
    createSegment(seconds, "SECONDS");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call


// Text animation

const text = "We’re Growing";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter1").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust speed here
  } else {
    // Once the first text is finished, start typing the second text
    typeWriter1();
  }
}

const text1 = "And So Is Our Website!";
let index1 = 0;

function typeWriter1() {
  if (index1 < text1.length) {
    document.getElementById("typewriter2").innerHTML += text1.charAt(index1);
    index1++;
    setTimeout(typeWriter1, 80); // Adjust speed here
  }
}

window.onload = typeWriter;  // Start the first typewriter effect on page load
