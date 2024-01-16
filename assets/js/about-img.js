let counter = 1

setInterval(() => {

    document.querySelector('.img-content.shoow').classList.remove('shoow')

    const banner = document.querySelector(`.img-${counter}`)
    banner.classList.add('shoow')
    counter++

    if(counter > 5){
        counter = 1
    }
},3000);