/**
 * ZIIPZY KERNEL - Secret Systems
 */

// Toggle the System Terminal via the UI Underscore
function toggleTerminal() {
    const terminal = document.getElementById('terminal');
    if (terminal) {
        terminal.classList.toggle('active');
    }
}

// GitHub Username Reveal (triggered from HTML)
function ghEgg(e) {
    const t = document.getElementById('gh-text');
    if (t) {
        const originalText = t.innerText;
        t.innerText = "@ziipzy";
        setTimeout(() => {
            t.innerText = originalText;
        }, 2000);
    }
}

// SECRET: Konami Code Listener
// Sequence: ↑ ↑ ↓ ↓ ← → ← → b a
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let inputSequence = [];

document.addEventListener('keydown', (e) => {
    inputSequence.push(e.key);
    inputSequence = inputSequence.slice(-secretCode.length);

    if (JSON.stringify(inputSequence) === JSON.stringify(secretCode)) {
        document.body.style.filter = "hue-rotate(90deg) brightness(1.2)";
        alert("SYSTEM OVERCLOCK ENABLED");
        setTimeout(() => {
            document.body.style.filter = "none";
        }, 5000);
    }
});

console.log("%c ZIIPZY OS v1.0.4 ", "background: #a855f7; color: #fff; font-weight: bold;");
console.log("> System ready. Secrets buried.");
