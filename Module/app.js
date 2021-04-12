const caruselItem  = document.querySelectorAll('.carousel-item');
const btnPrev = document.getElementById('carousel-button-prev')
const btnNext = document.getElementById('carousel-button-next')

function hide(){
    for( let i = 0; i < caruselItem.length; i++){
        caruselItem[i].classList.remove('carousel-item-visible')
    }
}

let n = 0
function next(){
    hide()
    caruselItem[n].classList.add('carousel-item-visible')

    if( n == caruselItem.length - 1){
        n = 0
    }else{
        n++
    }
}

function prev(){
    hide()
    caruselItem[n].classList.add('carousel-item-visible')

    if( n == 0){
        n = caruselItem.length - 1
    }else{
        n--
    }
}











btnNext.addEventListener('click',  next)
btnPrev.addEventListener('click',  prev)
