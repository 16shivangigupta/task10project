var box1 = document.querySelector('#box1');
var boxA = document.querySelector('#boxA');
var click = document.querySelector('#click');
var cross = document.querySelector('#boxA i');

click.addEventListener('click',function(){
    box1.style.transform = 'translateX(-100%)';
    boxA.style.transform = 'translateX(-100%)';
})

cross.addEventListener('click',function(){
    box1.style.transform = 'translateX(0%)';
    boxA.style.transform = 'translateX(0%)';
})
