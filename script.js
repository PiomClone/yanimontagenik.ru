// Create snowflakes
document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeCount = 30;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';

        // Random properties
        const size = Math.random() * 1.2 + 0.5; // 0.5 to 1.7em
        const posX = Math.random() * 100;

        snowflake.style.left = `${posX}vw`;
        snowflake.style.fontSize = `${size}em`;
        snowflake.style.opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8

        snowflakesContainer.appendChild(snowflake);
    }
});
