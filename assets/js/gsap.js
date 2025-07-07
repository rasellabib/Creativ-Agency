gsap.registerPlugin (SplitText);
let mySplitText = new SplitText("#next", { type: "chars"});
let chars = mySplitText.chars;
gsap.from(chars, {
    yPercent: 90, 
    stagger: 0.03, 
    ease: "back.out" ,
    duration: 0.15,
    opacity: 0,
});
var tl = gsap.timeline()


tl.from( ".spinner",{
    y: 600,
    duration: 1.5,
    opacity: 0.5,
    rotate: -260,
})
// tl.from( "#bar1",{
//     x:100,
//     duration: 0.1,
// })
// tl.from( "#bar2",{
//     y: -200,
//     duration: 0.1,
// })
// tl.from( "#bar3",{
//     x: 100,
//     duration: 0.1,
// })
// tl.from( "#bar4",{
//     y: -100,
//     duration: 0.1,
// })
// tl.from( "#bar5",{
//     x: -100,
//     duration: 0.1,
// }),
// tl.from( "#bar6",{
//     y: -100,
//     duration: 0.1,
// }),tl.from( "#bar7",{
//     x: -100,
//     duration: 0.1,
// }),tl.from( "#bar8",{
//     x: 100,
//     duration: 0.1,
// }),
// tl.from( "#bar9",{
//     x: 20,
//     duration: 0.1,
// }),
tl.from( "#titleDev",{
    y: 100,
    duration: 1,
})

tl.from( "#titleDev h4",{
    x:150,
    y: 100,
    duration: 1,
    stagger: 0.3,
    opacity:0
})

gsap.from( "#navbar",{
    top: "-40px",

    opacity: 0,
    duration: 2,
})
gsap.from( "#navbar img",{
    x: -40,
    bottom: "10px", 
    opacity: 0,
    duration: 1,
})




gsap.from( "#who",{
    x: -100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})

gsap.from( "#text1",{
    x: -100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})


gsap.from( "#content",{
    x: 100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})

gsap.from( "#content1",{
    x: 100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})


gsap.from( "#div1",{
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1 ,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})

gsap.from( "#div2",{
    x: 100,
    opacity: 0,
    delay: 0.8,
    duration: 1 ,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})

gsap.from( "#div3",{
    x: 100,
    opacity: 0,
    delay: 1.1,
    duration: 1 ,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})

gsap.from( "#div4",{
    x: 100,
    opacity: 0,
    delay: 1.4,
    duration: 1 ,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})



gsap.from( "#images",{
    x: 100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})


//use the defaults

gsap.to(".scramble1", {
  duration: 1, 
  scrambleText: {
    text: "28K", 
    chars: "XO", 
    revealDelay: 0.5, 
    duration: 3,
    speed: 0.3, 
    newClass: "myClass",
  },
  scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
});

gsap.to(".scramble2", {
    duration: 1, 
    scrambleText: {
      text: "Project completed", 
      chars: "XO", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });
  gsap.to(".scramble3", {
    duration: 1, 
    scrambleText: {
      text: "9K+", 
      chars: "XO", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });
  gsap.to(".scramble4", {
    duration: 1, 
    scrambleText: {
      text: "Happy customers", 
      chars: "XO", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });
  gsap.to(".scramble5", {
    duration: 1, 
    scrambleText: {
      text: "18", 
      chars: "XO", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });
  gsap.to(".scramble6", {
    duration: 1, 
    scrambleText: {
      text: "Years experiences", 
      chars: "XO", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });
  gsap.to(".scramble7", {
    duration: 1, 
    scrambleText: {
      text: "98", 
      chars: "XO", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });
  gsap.to(".scramble8", {
    duration: 1, 
    scrambleText: {
      text: "Awards achievement", 
      chars: "01", 
      revealDelay: 0.5, 
      duration: 3,
      speed: 0.3, 
      newClass: "myClass",
    },
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
  });






gsap.from( ".page5-toptext",{
    x: 100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})
gsap.from( ".step-section",{
    x: -100,
    opacity: 0,
    duration: 1.5 ,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // markers:true,
    }
})