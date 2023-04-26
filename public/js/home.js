

//image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover',()=>{
        collageImages.map((image, index) => {
            if(index!=i){
                image.style.filter = `blur(10px)`;
                item.style.zindex = 2;
            }
        })
    })

    item.addEventListener('mouseleave',() =>{
        collageImages.map((image, indedx) => {
            image.style = null;
        })
    })
})