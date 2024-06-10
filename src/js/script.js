$(document).ready(function(){
    $('#mobile_btn').on('click', function () {
        $('#mobile_area').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

const sections = $('section');
const navItems = $('.nav-item');