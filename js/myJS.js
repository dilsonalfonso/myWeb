document.addEventListener("DOMContentLoaded",function(e){
    let nav=document.querySelector("nav");
    let altura=nav.offsetTop;
    window.addEventListener("scroll", function(){
        console.log(altura);
        if(window.scrollY > altura)
        {
            nav.classList.remove("nav-top");
            nav.classList.add("nav-fixed");
        }
        else{
            nav.classList.remove("nav-fixed");
            nav.classList.add("nav-top");
        }
    });
    let $link=document.querySelectorAll(".nav-link");
    $link.forEach(e => {
        e.addEventListener("click",function(el) {
            let ident=e.dataset.href;
            el.preventDefault();
            const $cont=document.querySelector("#"+ident);
            //let position=$cont.getBoundingClientRect();
            let position=$cont.offsetTop;
            //console.log(position);
            window.scrollTo({top:position-97, left:0, behavior:'smooth'})
        })
    })
});

