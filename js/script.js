const assessmentItem = document.querySelector('.portfolio-assessment');
const portfolioItems = document.querySelectorAll('.portfolio-item-active');

    assessmentItem.addEventListener('mouseover', () => {
        assessmentItem.childNodes[1].classList.add('img-darken');
    })

    assessmentItem.addEventListener('mouseout', () => {
        assessmentItem.childNodes[1].classList.remove('img-darken');
    })

    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            portfolioItem.childNodes[1].classList.add('img-darken');
        })

        portfolioItem.addEventListener('mouseout', () => {
            portfolioItem.childNodes[1].classList.remove('img-darken');
        })
    })