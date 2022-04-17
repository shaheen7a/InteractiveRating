const submit_btn = document.querySelector('.submit-btn');
const card_content_1 = document.querySelector('.card-one');
const card_content_2 = document.querySelector('.card-two');
const ratingBtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let stars_score = 3 // default value

submit_btn.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){
    card_content_1.classList.add('hide');
    score.textContent = stars_score;
    card_content_2.classList.remove('hide');
    //console.log('submit click');
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    // parse stars score
    stars_score = event.target.textContent;
    //console.log(stars_score);
}

//console.log(ratingBtns);