// INTRO 
import * as intro from 'http://127.0.0.1:5500/public/assets/js/animeIntro.js'
setTimeout(() => {
    intro.animete()
}, 500);
intro.btn_intro_off



// AOS LIBRAIRIE
AOS.init({
    delay: 1000, // values from 0 to 3000, with step 50ms
    duration: 1000,
});