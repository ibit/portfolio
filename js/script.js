document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typewriter');

  // タイプライターアニメーション終了時の処理
    el.addEventListener('animationend', () => {
    el.classList.remove('typewriter');
    el.classList.add('typewriter-done');
    el.style.width = 'auto';
    el.style.borderRight = 'none';
    });

  // 挨拶表示
    const greeting = getGreeting();
    document.getElementById('greeting').textContent = greeting;
});

// ユーザーのタイムゾーンに応じた挨拶を返す
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
