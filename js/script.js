// console message
console.log('%c🚀 Welcome to the console of ibit.dev!', 'color: #ff8c00ff; background: #000000ff; font-size: 20px; padding: 6px; border-radius: 4px');

//clear console
window.clear = () => {
    console.clear();
    console.log('%c🧹 Console cleared!', 'color: #0be804ff; font-weight: bold; font-size: 18px; padding: 4px 0;');
};

function onTurnstileSuccess(token) {
  // Turnstile成功時に実行される
  const contactList = document.querySelector('.contact-list');
  if (contactList) {
    contactList.style.display = 'block';
  }
}
