/**
 * ZIIPZY KERNEL - Secret Systems (Fixed Mouse Logic)
 */

function toggleTerminal() {
    const terminal = document.getElementById('terminal');
    if (terminal) {
        terminal.classList.toggle('active');
    }
}

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

// Fixed Konami Logic
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let inputSequence = [];

document.addEventListener('keydown', (e) => {
    inputSequence.push(e.key);
    inputSequence = inputSequence.slice(-secretCode.length);

    if (JSON.stringify(inputSequence) === JSON.stringify(secretCode)) {
        // Apply filter to a specific class instead of the whole body tag 
        // to keep the mouse coordinate system stable
        document.documentElement.classList.add('kernel-overclock');
        
        console.log("> SYSTEM OVERCLOCK ENABLED");
        
        setTimeout(() => {
            document.documentElement.classList.remove('kernel-overclock');
        }, 5000);
    }
});

console.log("%c ZIIPZY OS v1.0.4 ", "background: #a855f7; color: #fff; font-weight: bold;");
