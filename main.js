// function add() {
//     let user = $("#username").val();

//     alert(user);
// }

// function plus() {
//     let html = `
//     <input class="form-controll" type="text" id="username">

//     `;
//     $('#res').append(html);
// }
// function change() {
//     $('#test').addClass('.red')
// }

$('.navcustom ul li').click(function () {
    $(this).children().addClass('active');
    $(this).siblings().children().removeClass('active');
});
