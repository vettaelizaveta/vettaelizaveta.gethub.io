$(document).ready(function(){
    $(".loader").css("display","none");
     function calculate (){
         let sum = parseInt($("#price1 option:selected").val())+ parseInt($("#price2 option:selected").val())+ parseInt($("#price3 option:selected").val());
   let days = sum/1000;
    $(".days .total").text(days);
        $(".price .total").text(sum);
    }
$("select").on("change", function(){
 calculate();
});
   calculate(); 
    
    
    
    
    
    var isInViewport = function (elem) {
            var distance = elem.getBoundingClientRect();
            return (
                distance.top >= 0 &&
                distance.left >= 0 &&
                distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                distance.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        var findMe = document.querySelector('.counter-start');

        window.addEventListener('scroll', function (event) {
            if (isInViewport(findMe)) {
                setTimeout(function () {

            odometer1.innerHTML = 120;
            odometer2.innerHTML = 460;
          odometer3.innerHTML = 340;
          odometer4.innerHTML = 23;
        }, 100);
    
            }
        }, false);
    
   
    
    
    
    


$(window).scroll(() => {
    let scrollDistnase = $(window).scrollTop();
    $('.section').each((i,el) => {
        if ($(el).offset().top - $('nav').onterHeight()<= scrollDistnase){
            $('nav a').each((e,el) => {
                if ($(el).hasClass ('active')){
                    $(el).removeClass ('active');}})
            
            $('nav li eq(' + i + ')').find('a').addClass('active');}
            
            }); });

    
    let options = {threshold:[0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el); });
});


       function onEntry (entry){
        entry.forEach (change => {
            if (change.isIntersecting){
                change.target.classList.add('show-animation');
            }} );}              
                    
