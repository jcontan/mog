document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('flashing-header');
    const colors = ['magenta', 'yellow', 'black', 'red', '#0FFF00', 'white', 'cyan'];
    let index = 0;

    function changeColor() {
        header.style.color = colors[index];
        index = (index + 1) % colors.length;
    }

    setInterval(changeColor, 1000);
});
