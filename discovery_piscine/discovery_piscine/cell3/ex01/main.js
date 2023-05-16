const ballon = document.getElementById('ballon');

let currentWidth = 300;

let max_times = 10;

ballon.addEventListener('click', () => {
    currentWidth = currentWidth + 100;
    ballon.style.width = currentWidth + 'px';
    ballon.style.height = currentWidth + 'px';
});

ballon.addEventListener('mouseleave', () => {
    
});