// MODAL CONTENUE
let modal = document.querySelector('#modal')
let body_modal = modal.querySelector('.body_modal')

let btn_modal_about_on = document.querySelector('.btn_modal_about_on')
let btn_modal_prototype_on = document.querySelector('.btn_modal_prototype_on')
let btn_modal_formations_on = document.querySelector('.btn_modal_formations_on')
let btn_modal_contact_on = document.querySelector('.btn_modal_contact_on')
let btn_modal_off = document.querySelector('.btn_modal_off')

const modalOnOff = () => {
    if (modal.matches('.modal_active')) {
        modal.classList.remove('modal_active')
        modal.classList.add('modal_desactive')
    } else {
        modal.classList.remove('modal_desactive')
        modal.classList.add('modal_active')
    }
}

// laptop
btn_modal_about_on.addEventListener('click', modalOnOff)
btn_modal_prototype_on.addEventListener('click', modalOnOff)
btn_modal_formations_on.addEventListener('click', modalOnOff)
btn_modal_contact_on.addEventListener('click', modalOnOff)
btn_modal_off.addEventListener('click', modalOnOff)


// mobile
btn_modal_about_on.addEventListener("touchstart", (e)=>{
    [...e.changedTouches].forEach(touch => {
        modalOnOff()
    })
})