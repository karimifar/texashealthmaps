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

window.addEventListener("scroll", function(e){
    var scrollingDown = this.oldScroll < this.scrollY;
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
var projectImages = document.querySelectorAll('.project-img img');


var options = {
	rootMargin: '0px 0px -350px 0px',
	threshold: 0.00001
  };
function handleIntersection(entries, observer){
entries.forEach( function(entry){
    // console.log(entry.intersectionRect.height)
    var img = entry.target
    var status = entry.target.dataset.status
    console.log(entry.intersectionRatio)
    if(entry.intersectionRatio > 0 && status === "flat") {
        console.log(entry)
        console.log(img)
        $(img).css("transform","rotateY(-0deg)")
        console.log($(img).attr("data-status"))
        entry.target.dataset.status = "perspective"
    }else if(status ==="perspective"){
        $(img).css("transform","rotateY(-30deg)")
        entry.target.dataset.status = "flat"
    }
})
}
var observer = new IntersectionObserver(handleIntersection, options);

projectImages.forEach(function(img){
  observer.observe(img);
})