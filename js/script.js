//hidden feature
let inputBuffer = '';

document.addEventListener('keydown', (e) => {
    inputBuffer += e.key.toLowerCase();
    if (inputBuffer.length > 10) inputBuffer = inputBuffer.slice(-10); 

    if (inputBuffer.includes('ibit')) {
        alert('Hello. What\'s up?');
        inputBuffer = '';
    }
});

// console message
console.log('%c🚀 Welcome to the console of ibit.dev!', 'color: cyan; background: black; font-size: 20px; padding: 6px; border-radius: 4px');