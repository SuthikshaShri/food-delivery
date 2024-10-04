function searchRestaurants() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const restaurantCards = document.getElementsByClassName('restaurant-card');
    for (let i = 0; i < restaurantCards.length; i++) {
        const restaurantName = restaurantCards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (restaurantName.includes(input)) {
            restaurantCards[i].style.display = '';
        } else {
            restaurantCards[i].style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach((star) => {
        star.addEventListener('click', () => {
            removeSelection();
            star.classList.add('selected');
            let rating = star.getAttribute('data-value');
            ratingValue.textContent = `Selected Rating: ${rating}`;
            
            // Highlight all previous stars as well
            highlightPreviousStars(star);
        });
    });

    function removeSelection() {
        stars.forEach((star) => {
            star.classList.remove('selected');
        });
    }

    function highlightPreviousStars(currentStar) {
        let selectedValue = currentStar.getAttribute('data-value');
        stars.forEach((star) => {
            if (star.getAttribute('data-value') <= selectedValue) {
                star.classList.add('selected');
            }
        });
    }
});

