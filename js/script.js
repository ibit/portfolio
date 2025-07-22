// Greeting 
document.addEventListener('DOMContentLoaded', () => {
    // 挨拶表示
    const greeting = getGreeting();
    document.getElementById('greeting').textContent = greeting;
});

// timezone
function getGreeting() {
    try {
        const hour = Number(new Date().toLocaleString("en-US", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            hour: "numeric",
            hour12: false
        }));

        if (hour >= 5 && hour < 12) {
            return "Good morning!";
        } else if (hour >= 12 && hour < 17) {
            return "Good afternoon!";
        } else if (hour >= 17 && hour < 23) {
            return "Good evening!";
        } else {
            return "You're up late!";
        }
    } catch {
        return "Hello there!";
    }
}

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

const data = [
    { Label: 'Menu', Value: 'menu()' },
    { Label: 'Info', Value: '?' },
    { Label: 'Ascii art', Value: 'ascii()' },
    { Label: 'Version', Value: '?' }
];

console.table(data);

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


//Ascii art
window.ascii = () => {
    console.clear();
    console.log('%c🤣 ASCII Art', 'color: yellow; font-weight: bold; font-size: 18px; padding: 4px 0;');

const arts = [
            '%c(>^_^)>  Hello!',
            '%c(⌐■_■)  Cool Console!',
            '%c(╯°□°）╯︵ ┻━┻  Table flip!',
            '%c(^_^)v  Peace!',
            '%c(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  Sparkle!',
            '%c(｡◕‿◕｡)  Smile!',
            '%c(¬‿¬)  Sneaky!',
            '%c(✿◠‿◠)  Flower Power!',
            '%c(づ｡◕‿‿◕｡)づ  Hug!',
        ];

    const colors = [
        'color: red;',
        'color: blue;',
        'color: green;',
        'color: purple;',
        'color: orange;',
        'color: teal;',
        'color: magenta;',
        'color: brown;',
        'color: darkcyan;',
    ];

    const idx = Math.floor(Math.random() * arts.length);
    console.log(arts[idx], colors[idx]);
};


