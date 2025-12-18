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

// Function to toggle font comparison view
function toggleFontComparison() {
    const comparisonDiv = document.querySelector('.font-comparison');
    if (comparisonDiv.style.display === 'none' || comparisonDiv.style.display === '') {
        comparisonDiv.style.display = 'block';
    } else {
        comparisonDiv.style.display = 'none';
    }
}

// Function to change profile title font
function changeProfileFont(fontClass) {
    const titleElement = document.querySelector('.profile-title');
    if (!titleElement) {
        console.error('Profile title element not found!');
        return;
    }

    // Убираем все классы шрифтов и возвращаем к базовому стилю
    titleElement.className = 'profile-title'; // Сбрасываем все классы и оставляем только базовый

    // Добавляем нужный класс
    titleElement.classList.add(fontClass);

    // Скрываем панель сравнения после выбора
    document.querySelector('.font-comparison').style.display = 'none';

    console.log('Font changed to:', fontClass);
}

// Add keyboard shortcut to show comparison
document.addEventListener('keydown', function(e) {
    if (e.key === 'f' && e.ctrlKey) {
        e.preventDefault();
        toggleFontComparison();
    }
});