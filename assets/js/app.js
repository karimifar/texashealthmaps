var parallaxEl = document.getElementsByClassName("project-row")
console.log(parallaxEl)
// $(window).on('scroll', function(){
//     for(var i=0; i<parallaxEl.length; i++){
//         var el = parallaxEl[i];
//         console.log($(el).scrollTop())
//         if($(el).scrollTop()< 10){
//             console.log("hit top")
//         }
//     }
// })
var scrollingDown
window.addEventListener("scroll", function(e){
    scrollingDown = this.oldScroll < this.scrollY;
    this.oldScroll = this.scrollY;
    // if(scrollingDown){
    //     for(var i=0; i<parallaxEl.length; i++){
    //         var el = parallaxEl[i]
    //         var nextEl = parallaxEl[i+1]
    //         var prevEl = parallaxEl[i-1]
    //         var viewportOffset = el.getBoundingClientRect();
    //         // console.log(viewportOffset)
    //         if (viewportOffset.top < 0 && viewportOffset.bottom >0){
    //             console.log("inside "+i)
    //             // console.log(el)
    
    //             // $(prevEl).removeClass("isFixed")
    //             $(el).addClass("isFixed")
    //         }else{
    //             console.log("else")
    //             $(el).removeClass("isFixed")
    //         }
    //     }
    // }else{
    //     for(var i=0; i<parallaxEl.length; i++){
            
    //     }

    // }
    
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