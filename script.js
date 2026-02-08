// Page switching
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Gift Box Feature
function openGift() {
    document.getElementById('message').style.display = 'block';
    // Add confetti animation (use a library like canvas-confetti for real effect)
    alert('Confetti! 💖');
}

// Diary Feature
function sendDiary() {
    const text = document.getElementById('diary-text').value;
    // Simulate WhatsApp send (replace with real API)
    alert(`Sending to WhatsApp: ${text}`);
    // Real: Use fetch to backend endpoint
}

// Games Feature (Pickup Lines)
let lines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a name, or can I call you mine?",
    // Add 8+ more
];
let currentLine = 0;

function respond(answer) {
    if (answer === 'yes') {
        alert('Yay! 😘');
    } else {
        alert('Challenge accepted! 😉');
    }
    currentLine = (currentLine + 1) % lines.length;
    document.getElementById('pickup-line').textContent = lines[currentLine];
}
const express = require('express');
const twilio = require('twilio');
const app = express();

const accountSid = 'your-twilio-sid';
const authToken = 'your-twilio-token';
const client = twilio(accountSid, authToken);

app.use(express.json());

app.post('/send-whatsapp', (req, res) => {
    const { message } = req.body;
    client.messages.create({
        body: message,
        from: 'whatsapp:+your-twilio-number',
        to: 'whatsapp:+9767757067'
    }).then(() => res.send('Sent!')).catch(err => res.status(500).send(err));
});

app.listen(3000, () => console.log('Server running on port 3000'));

// Add similar functions for spin-wheel (use Math.random for spin), vault (file upload), etc.
// Example for Spin Wheel (add to HTML: <canvas id="wheel"></canvas>)
function spinWheel() {
    const options = ['Kiss', 'Hug'];
    const result = options[Math.floor(Math.random() * options.length)];
    alert(`Wheel says: ${result}!`);
}

// Background music toggle (add button in menu)
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    audio.paused ? audio.play() : audio.pause();
}
