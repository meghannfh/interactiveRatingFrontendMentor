const values = document.querySelectorAll('.numbers')
const submit = document.getElementById('submit')
const thanksCard = document.getElementById('thanksCard')
const surveyCard = document.getElementById('surveyCard')
const ratingMsg = document.getElementById('ratingMsg')

let rating

const getRating = () => {
    values.forEach((value) => {
        value.addEventListener('click', (e)=>{
            var prevValue = document.querySelector('.select')
            var target = e.target
            rating = e.target.value

            if(prevValue){
                prevValue.classList.remove('select')
            }

            target.classList.add('select')

            console.log(rating)
        })
    })
    return rating
}

getRating()

submit.addEventListener('click', () => {
    ratingMsg.innerText = `You selected ${rating} out of 5`
    surveyCard.classList.add('hide')
    thanksCard.classList.remove('hide')
})