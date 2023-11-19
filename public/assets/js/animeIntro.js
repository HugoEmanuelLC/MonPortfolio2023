
let intro = document.querySelector('#intro')

const introOnOff = () => {
    if (intro.matches('.intro_active')) {
        intro.classList.remove('intro_active')
        intro.classList.add('intro_desactive')
    } else {
        intro.classList.remove('intro_desactive')
        intro.classList.add('intro_active')
    }
}


function animete() {
    let intro = document.querySelector('#intro')
    let ul_hide = intro.querySelector('.hide')
    let ul_show = intro.querySelector('.show')
    let li = ul_hide.querySelectorAll('li')

    let taille = li.length
    let id = 0
    console.log(taille);

    if (taille > 0) {
        // li[id].classList.add()
        console.log(li[id]);
        
        if (taille == 1) {
            setTimeout(() => {
                ul_show.appendChild(li[id])
                id++
                taille--
                animete()
            }, 1500);
        } else {
            setTimeout(() => {
                ul_show.appendChild(li[id])
                id++
                taille--
                animete()
            }, 500);
        }
    } else {}

}

setTimeout(() => {
    animete()
}, 500);


let btn_intro_off = document.querySelector('.btn_intro_off')
btn_intro_off.addEventListener('click', introOnOff)