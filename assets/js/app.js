var openningAnimation = new TimelineMax()
openningAnimation.staggerFrom(".layer", 2 ,{y:-50, opacity:0, transformOrigin: "50% 50%", ease:Power4.easeOut},0.2)


// var infiniteAnimation = new TimelineMax({repeat:-1, delay:2})
// infiniteAnimation.to("#Layer_1", 3, {y:-10, ease:Power4.easeOut})
//   .to("#Layer_1", 3, {y:0, ease:Power4.easeOut, delay:Math.random()*5})

var pin = new TimelineMax({repeat:-1, delay:2})
pin.to("#pin", 1.5, {y:-20, ease:Power4.easeOut})
  .to("#pin-shadow", 1.5, {scale:2, ease:Power4.easeOut, transformOrigin: "50% 50%"},"=-1.5")
  .to("#pin", 2, {y: 0, ease:Power2.easeIn})
  .to("#pin-shadow", 2, {scale:1, ease:Power2.easeIn, transformOrigin: "50% 50%"},"=-2")
  
  

console.log("varsion: 22/1-3")
var hash;
hash = window.location.hash;

window.onbeforeunload = function () {
  // window.scrollTo(0, 0);
}

 
var parallaxEl = document.getElementsByClassName("project-row")

var parallaxWrap = document.getElementById("parallax-wrap")

var scrollingDown
window.addEventListener("scroll", function(e){
    scrollingDown = this.oldScroll < this.scrollY;
    this.oldScroll = this.scrollY;

    var viewportOffset = parallaxWrap.getBoundingClientRect();
    if (viewportOffset.top < 0 && viewportOffset.bottom >0){
        // console.log(el)
        $("#proj-title").addClass("isFixed")
        // $(prevEl).removeClass("isFixed")
        // $(el).addClass("isFixed")
    }else{
        $("#proj-title").removeClass("isFixed")
    }
    
})





////observer test
var projects = document.querySelectorAll('.project-row');


var options = {
  //window.innerHeight
	rootMargin:   '0px',// 0px -' + (window.innerHeight-100) + 'px 0px',
	threshold: 0.5
  };
function handleIntersection(entries, observer){
  console.log("scroll down",scrollingDown)
entries.forEach( function(entry){
    // console.log(entry.intersectionRect.height)
    var project = entry.target
    var title = project.dataset.title
    var index = project.dataset.index
    // console.log(title)
    // console.log(entry.intersectionRatio)
    $("#proj-title h1").text(title)
    if(entry.intersectionRatio > 0.50) {
        // console.log(entry)
        // console.log(project)
        $("#proj-title h1").text(title)
        // console.log($(img).attr("data-status"))
        // entry.target.dataset.status = "perspective"
    }else if(!scrollingDown){
      var prevTitle = projects[index-1].getAttribute("data-title");
      console.log(prevTitle)
      $("#proj-title h1").text(prevTitle)

    }
})
}
var observer = new IntersectionObserver(handleIntersection, options);

projects.forEach(function(project){
  observer.observe(project);
})