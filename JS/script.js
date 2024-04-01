var letReviewBtn = document.getElementById('letReviewBtn');
var popupWrp = document.getElementById('popupWrp');
var popupClouseBtn = document.getElementById('popupClouseBtn');


letReviewBtn.addEventListener('click', () => {
    popupWrp.classList.toggle('popup-clouse');
})

popupClouseBtn.addEventListener('click', () => {
    popupWrp.classList.toggle('popup-clouse');
})