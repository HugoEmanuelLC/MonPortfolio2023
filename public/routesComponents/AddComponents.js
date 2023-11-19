let componente = './views/'

//ABOUT
$('.btn_modal_about_on').click(function() {
    $('#modal .body_modal .bloc').load(componente+'about.html')
})

$('.btn_modal_prototypes_on').click(function() {
    $('#modal .body_modal .bloc').load(componente+'prototypes.html')
})

$('.btn_modal_formations_on').click(function() {
    $('#modal .body_modal .bloc').load(componente+'formations.html')
})

$('.btn_modal_contact_on').click(function() {
    $('#modal .body_modal .bloc').load(componente+'contact.html')
})




