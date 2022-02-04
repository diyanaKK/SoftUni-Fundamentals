document.addEventListener('DOMContentLoaded', ()=> {
    const titleElements = document.querySelectorAll('.content__item');

    titleElements.forEach(title => {
        title.addEventListener('click' , userClicked)


        function userClicked(event) {
            console.log(event.currentTarget);
            const paragraph = event.currentTarget.querySelector('p')
            paragraph.classList.toggle('hidden');
        }
    })
})