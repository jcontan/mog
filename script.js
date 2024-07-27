document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('flashing-header');
    const colors = ['red', '#0FFF00', 'white', 'cyan', 'magenta', 'yellow', 'black'];
    let index = 0;

    function changeColor() {
        header.style.color = colors[index];
        index = (index + 1) % colors.length;
    }

    setInterval(changeColor, 1000);
});
