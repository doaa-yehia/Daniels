 // typing animation
 var typed = new Typed('#element', {
    strings: ['Developer', 'Designer', 'Larry Daniels'],
    typeSpeed: 100,
    backDelay: 500,
    startDelay: 500,
    loop: true,

});
// loading spinner
    window.addEventListener("load",()=>{
    document.querySelector(".loader").classList.add("loader-hidden");
    //to hidden the loading layer completly
    document.querySelector(".loader").addEventListener("transitionend",()=>{
        document.body.removeChild( document.querySelector(".loader"));
    })
});     