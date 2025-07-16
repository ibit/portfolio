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