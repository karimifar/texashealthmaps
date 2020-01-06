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
    if(scrollingDown){
        for(var i=0; i<parallaxEl.length; i++){
            var el = parallaxEl[i]
            var nextEl = parallaxEl[i+1]
            var prevEl = parallaxEl[i-1]
            var viewportOffset = el.getBoundingClientRect();
            // console.log(viewportOffset)
            if (viewportOffset.top < 0 && viewportOffset.bottom >0){
                console.log("inside "+i)
                // console.log(el)
    
                // $(prevEl).removeClass("isFixed")
                $(el).addClass("isFixed")
            }else{
                console.log("else")
                $(el).removeClass("isFixed")
            }
        }
    }else{
        for(var i=0; i<parallaxEl.length; i++){
            
        }

    }
    
})
