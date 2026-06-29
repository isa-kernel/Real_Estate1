import {

useEffect,

useRef

}

from "react";

import {

FaTimes,

FaChevronLeft,

FaChevronRight

}

from "react-icons/fa";

import "../../styles/imageLightbox.css";

function ImageLightbox({

images,

currentIndex,

setCurrentIndex,

onClose

}){

const touchStartX=

useRef(null);

const previousImage=()=>{

setCurrentIndex(

currentIndex===0

?

images.length-1

:

currentIndex-1

);

};

const nextImage=()=>{

setCurrentIndex(

currentIndex===images.length-1

?

0

:

currentIndex+1

);

};

useEffect(()=>{

const handleKeyDown=(e)=>{

if(e.key==="ArrowLeft"){

previousImage();

}

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="Escape"){

onClose();

}

};

window.addEventListener(

"keydown",

handleKeyDown

);

return()=>{

window.removeEventListener(

"keydown",

handleKeyDown

);

};

});

const handleTouchStart=(e)=>{

touchStartX.current=

e.changedTouches[0].clientX;

};

const handleTouchEnd=(e)=>{

const endX=

e.changedTouches[0].clientX;

const diff=

touchStartX.current-endX;

if(diff>50){

nextImage();

}

if(diff<-50){

previousImage();

}

};

return(

<div

className="lightbox"

onTouchStart={handleTouchStart}

onTouchEnd={handleTouchEnd}

>

<button

className="close-btn"

onClick={onClose}

>

<FaTimes/>

</button>

<button

className="nav-btn left"

onClick={previousImage}

>

<FaChevronLeft/>

</button>

<img

src={images[currentIndex]}

alt="Property"

/>

<button

className="nav-btn right"

onClick={nextImage}

>

<FaChevronRight/>

</button>

<div className="image-counter">

{currentIndex+1}

/

{images.length}

</div>

</div>

);

}

export default ImageLightbox;