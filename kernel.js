/** * ZIIPZY KERNEL - STUDIO EDITION
 */

function toggleTerminal() {
    const term = document.getElementById('terminal');
    if(term) term.classList.toggle('active');
}

// Secret Konami Sequence
const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let buffer = [];

document.addEventListener('keydown', (e) => {
    buffer.push(e.key);
    buffer = buffer.slice(-code.length);
    if (JSON.stringify(buffer) === JSON.stringify(code)) {
        document.documentElement.classList.add('kernel-overclock');
        setTimeout(() => document.documentElement.classList.remove('kernel-overclock'), 5000);
    }
});

console.log("%c ZIIPZY CREATIVE STUDIO ", "color: #a855f7; font-weight: bold; font-size: 20px;");
