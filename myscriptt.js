document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById('heart');
    const note = document.getElementById('note');
    const closeNote = document.getElementById('closeNote');

    
    heart.addEventListener('click', () => {
        note.style.display = 'block';
        setTimeout(() => {
            note.style.opacity = 1;
            note.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10); 
    });

    
    closeNote.addEventListener('click', () => {
        note.style.opacity = 0;
        note.style.transform = 'translate(-50%, -50%) scale(0.5)';
        setTimeout(() => {
            note.style.display = 'none';
        }, 300); 
    });
});


//xronometro
const countdownDate = new Date("April 6, 2025 00:00:00").getTime();
const countdownTimer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown-timer").innerHTML = "Happy Birthday!";
  }
}, 1000);

function toggleNote(noteeId) {
  var notee = document.getElementById(noteeId);
  if (notee.style.display === 'block') {
      notee.style.display = 'none'; // fainetai
  } else {
      notee.style.display = 'block'; //den fainetai
  }
}