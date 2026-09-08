// GSAP's ScrollTrigger must be registered before use with this CDN build,
// otherwise the scroll-linked animations below silently do nothing.
gsap.registerPlugin(ScrollTrigger);

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.clientX +30 + "px";
    crsr.style.top = dets.clientY + "px";
    blur.style.left = dets.clientX - 250 + "px";
    blur.style.top = dets.clientY - 250 + "px";
})

// was "#nav h4" — the nav items are now wrapped in <a> tags, so binding to
// the anchor instead means the hover effect covers the whole clickable area
var navLinks = document.querySelectorAll("#nav a")
navLinks.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.transform = "scale(2)";
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.transform = "scale(1)";
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    });
})

// Placeholder newsletter handler — the form has no backend yet, so without
// this it just reloads the page with the email appended to the URL.
// Swap the alert() out for a real request to your email provider's API.
var newsletterForm = document.querySelector("#newsletter-form");
if(newsletterForm){
    newsletterForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thanks for signing up! We'll be in touch.");
        newsletterForm.reset();
    });
}

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})

// was "#about-us img,about-us-in" — missing "#" meant this half of the
// animation targeted a nonexistent tag and never ran
gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    },
});

// was "#page4 h1" — that heading is now <h2> (single <h1> per page)
gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
      //  markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
