const seeBtn = document.querySelector('.see-btn')
const recommendation = document.querySelector('.recommendation')
const lessBtn = document.querySelector('.less-btn')

seeBtn.addEventListener('click', (e)=> {
    recommendation.classList.add('visible')
    seeBtn.style.display = 'none'
})
lessBtn.addEventListener('click', (e)=>{
    seeBtn.style.display = 'block'
    recommendation.classList.remove('visible')
})


const houses = document.querySelectorAll('.house')
const btns = document.querySelectorAll('.op')

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(btn.classList.contains('house_btn')){
            houses.forEach((house) => {
                if(house.classList.contains('housee')){
                    house.style.display = 'block'
                    seeBtn.style.display = 'none'
                    lessBtn.style.display = 'none'
                    recommendation.style.height = 'fit-content'
                }else{
                    house.style.display = 'none'
                }
            });
        }
        if(btn.classList.contains('villa_btn')){
            houses.forEach((house) => {
                if(house.classList.contains('villa')){
                    house.style.display = 'block'
                    seeBtn.style.display = 'none'
                    lessBtn.style.display = 'none'
                    recommendation.style.height = 'fit-content'
                }else{
                    house.style.display = 'none'
                }
            });
        }
        if(btn.classList.contains('apartement_btn')){
            houses.forEach((house) => {
                if(house.classList.contains('apartement')){
                    house.style.display = 'block'
                    seeBtn.style.display = 'none'
                    lessBtn.style.display = 'none'
                    recommendation.style.height = 'fit-content'
                }else{
                    house.style.display = 'none'
                }
            });
        }
    })
})

