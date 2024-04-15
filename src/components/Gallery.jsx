import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = ({ filter = 'home' }) => {

  const { gallery } = useContext(GalleryContext);

  return (
    <>
    <div className="gallery grid-columns-5 p-3">
      {gallery
        .filter((pic) => (filter === 'favoritos' ? pic.liked === true : true))
        .map((pic) => (
          <div key={pic.id}>
            <div className='container'>
              <div className="card text-white">
                <img className='card-img' src={pic.src} alt={pic.alt} />
                <div className='card-img-overlay'>
                  <p className="card-text text-end">
                    <IconHeart id={pic.id} />
                  </p>
                  <p className='card-text'>{pic.alt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};
export default Gallery;
