
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved user preference in local storage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            themeToggleButton.innerHTML = currentTheme === 'dark-theme'
                ? '<i class="fas fa-moon"></i>' 
                : '<i class="fas fa-sun"></i>';
        }

        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDarkTheme = body.classList.contains('dark-theme');
            
            // Update the button icon and save the theme preference
            themeToggleButton.innerHTML = isDarkTheme
                ? '<i class="fas fa-moon"></i>'
                : '<i class="fas fa-sun"></i>';
            
            localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
        });
    });

