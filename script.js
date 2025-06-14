const ratingCard = document.getElementById('ratingCard');
const thankYouCard = document.getElementById('thankYouCard');
const submitBtn = document.getElementById('submitBtn');
const selectedRatingText = document.getElementById('selectedRating');
let selectedRating = null;


function selectRating(rating) {
    selectedRating = rating;
}



submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        selectedRatingText.textContent = selectedRating;
        ratingCard.classList.add('hidden');     // Hide rating card
        thankYouCard.classList.remove('hidden'); // Show thank you card
    } else {
        alert("Please select a rating before submitting!");
    }
});
