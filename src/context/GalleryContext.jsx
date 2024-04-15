import { createContext, useState, useEffect } from 'react';

const API_URL = 'https://api.pexels.com/v1/search?query=sunset';
const API_KEY = 'P6YRk2u4yj0sPxvKFkC0P4odslLxcs01mSqgXBJI7E5sluwZf465NK4S';


    export const GalleryContext = createContext();

    export function GalleryProvider({ children }) {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        const res = await fetch(API_URL, {
        headers: {
            Authorization: API_KEY,
        },
        });
        const data = await res.json();
        const photos = data.photos.map((photo) => {
        return {
            id: photo.id,
            src: photo.src.tiny,
            alt: photo.alt,
            liked: false,
        };
        });

        setGallery(photos);
    };

    return (
        <GalleryContext.Provider 
            value={{
                gallery, 
                setGallery 
            }}> 
        {children} 
        </GalleryContext.Provider>
    );
    
}