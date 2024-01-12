let counter = 1

setInterval(() => {

    document.querySelector('.banner.show').classList.remove('show')

    const banner = document.querySelector(`.banner-${counter}`)
    banner.classList.add('show')
    counter++

    if(counter > 4){
        counter = 1
    }
},3000);