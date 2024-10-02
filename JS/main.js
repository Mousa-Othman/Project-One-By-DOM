// var imgsList =document.getElementsByClassName('imge-item');
var imgsList =Array.from(document.getElementsByClassName('imge-item'));
var lightboxContainer=document.querySelector('.lightbox-container');
var lightboxItem =document.querySelector('.lightbox-item');
const prevButton=document.getElementById('prev');
const nextButton=document.getElementById('next');
const closeButton=document.getElementById('close');
let currentyIndex;

for (var i = 0; i < imgsList.length; i++) {
        imgsList[i].addEventListener('click', function(e){
            currentyIndex=imgsList.indexOf(e.target);
            var imgSrc = e.target.getAttribute('src');
            lightboxContainer.classList.replace('d-none', 'd-flex');
            lightboxItem.style.backgroundImage =`url(${imgSrc})`;
            // nextSlide();
        
    })
    
};
function Slide(i) {
        currentyIndex=currentyIndex+i;
        if(currentyIndex==imgsList.length){
            currentyIndex=0;
        }
        else if(currentyIndex ==-1){
            currentyIndex=imgsList.length-1;  
        }
        var imgSrcnew =imgsList[currentyIndex].getAttribute('src');
        lightboxItem.style.backgroundImage =`url(${imgSrcnew})`;
    };
 
function closeSlide(){
    lightboxContainer.classList.replace('d-flex', 'd-none');

}    
//rplace 2 function nextslide and prevslide =>slide
// function nextSlide() {
//     currentyIndex++;
//     if(currentyIndex==imgsList.length){
//         currentyIndex=0;
//     }
//     var imgSrcnew =imgsList[currentyIndex].getAttribute('src');
//     lightboxItem.style.backgroundImage =`url(${imgSrcnew})`;
//     // console.log(currentyIndex);
//     // console.log(imgSrcnew);
// };
// function prevSlide() {
//     currentyIndex--;
//     if(currentyIndex==-1){
//         currentyIndex=imgsList.length-1;  
//     }
//     var imgSrcnew =imgsList[currentyIndex].getAttribute('src');
//     lightboxItem.style.backgroundImage =`url(${imgSrcnew})`;
//     // console.log(currentyIndex);
//     // console.log(imgSrcnew);
// };
// nextButton.addEventListener('click',nextSlide);
// prevButton.addEventListener('click',prevSlide);

nextButton.addEventListener('click',function(){Slide(1)});
prevButton.addEventListener('click',function(){Slide(-1)});
closeButton.addEventListener('click',closeSlide );

document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight')
    {
        Slide(1)
    }
    else  if(e.key=='ArrowLeft')
        {
            Slide(-1)
        }
    else  if(e.key=='Escape')
        {
            closeSlide()
        }
});
