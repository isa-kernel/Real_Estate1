import { useState } from "react";

import ImageLightbox from "./ImageLightbox";

import "../../styles/propertyGallery.css";

function PropertyGallery({ images = [] }) {

    const placeholder =
        "https://placehold.co/900x600?text=No+Image";

    const galleryImages =
        images.length > 0
            ? images
            : [placeholder];

    const [currentIndex, setCurrentIndex] = useState(0);

    const [showLightbox, setShowLightbox] = useState(false);

    return (

        <>

            <div className="gallery">

                <div

                    className="gallery-main"

                    onClick={() =>

                        setShowLightbox(true)

                    }

                >

                    <img

                        src={galleryImages[currentIndex]}

                        alt="Property"

                    />

                </div>

                <div className="gallery-thumbnails">

                    {

                        galleryImages.map((image,index)=>(

                            <img

                                key={index}

                                src={image}

                                alt="Thumbnail"

                                className={

                                    currentIndex===index

                                    ?

                                    "active"

                                    :

                                    ""

                                }

                                onClick={()=>

                                    setCurrentIndex(index)

                                }

                            />

                        ))

                    }

                </div>

            </div>

            {

                showLightbox &&

                <ImageLightbox

                    images={galleryImages}

                    currentIndex={currentIndex}

                    setCurrentIndex={setCurrentIndex}

                    onClose={()=>

                        setShowLightbox(false)

                    }

                />

            }

        </>

    );

}

export default PropertyGallery;