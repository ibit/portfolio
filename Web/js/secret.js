// console message
let inputBuffer = '';
document.addEventListener('keydown', (e) => {
    inputBuffer += e.key.toLowerCase();
    if (inputBuffer.length > 10) inputBuffer = inputBuffer.slice(-10); 

    if (inputBuffer.includes('ibit')) {
        alert('Hello. What\'s up?');
        inputBuffer = '';
    }
});

// Help
window.help = () => {
    console.clear();
    console.log('%c❓ Help', 'color: cyan; font-weight: bold; font-size: 18px; padding: 4px 0;');

    const commands = [
        { command: 'help()', description: '❓ Show this help message' },
        { command: 'menu()', description: '🍔 Show console menu' },
        { command: 'info()', description: 'ℹ️ Show site information' }
    ];

    const maxCommandLength = Math.max(...commands.map(c => c.command.length));

    commands.forEach(({ command, description }) => {
        const paddedCommand = command + ' '.repeat(maxCommandLength - command.length);
        console.log(`%c${paddedCommand} : %c${description}`, 'color: white; font-weight: bold;', 'color: lightgray; font-weight: normal;');
    });
};



// Hamburger menu
window.menu = () => {
    console.clear();
    console.log('%c🍔 Hamburger Menu', 'color: cyan; font-weight: bold; font-size: 18px; padding: 4px 0;');

const links = [
    { label: '🏠 Home', url: 'https://ibit.dev' },
    { label: 'ℹ️ About', url: 'https://ibit.dev/about' },
    { label: '🧩 Portfolio', url: 'https://ibit.dev/portfolio' },
    { label: '📝 Blog', url: 'https://ibit.dev/blog' },
    { label: '📞 Contact', url: 'https://ibit.dev/contact' },
    { label: '⚖️ Terms', url: 'https://ibit.dev/terms' },
    { label: '🔒 Privacy', url: 'https://ibit.dev/privacy' }
    ];

const maxLabelLength = Math.max(...links.map(l => l.label.length));

    links.forEach(({label, url}) => {
    const paddedLabel = label + ' '.repeat(maxLabelLength - label.length);
    console.log(`%c${paddedLabel} : %c${url}`, 'color: yellow; font-weight: bold;', 'color: lightblue; text-decoration: underline;');
    });
};



// Information 
window.info = () => {
    console.clear();
    console.log('%cℹ️ Information', 'color: cyan; font-weight: bold; font-size: 18px; padding: 4px 0;');

    const info = {
        'Domain': 'ibit.dev',
        'Version': '---',
        'Author': 'ibit',
        'GitHub': 'https://github.com/ibit'
    };
    const maxKeyLength = Math.max(...Object.keys(info).map(k => k.length));
    Object.entries(info).forEach(([key, value]) => {
        const paddedKey = key + ' '.repeat(maxKeyLength - key.length);
        console.log(`%c${paddedKey} : %c${value}`, 'color: white; font-weight: bold;', 'color: lightgray; font-weight: normal;');
    });
    }