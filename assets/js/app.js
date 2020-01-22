console.log("22/1-1")
var hash = window.location.hash;
window.onbeforeunload = function () {
  if(hash.length == 0){
    window.scrollTo(0, 0);
  }else{
    window.scrollTo(0, 0);
    var scrollto = $(hash).offset.top;
    window.scrollTo(scrollto)
  }
 
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
    console.log(title)
    console.log(entry.intersectionRatio)
    if(scrollingDown && entry.intersectionRatio > 0.50) {
        console.log(entry)
        console.log(project)
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