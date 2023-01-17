import React, { useRef, useEffect } from 'react';

const ImageZoom = ({ imgSrc, imgId, resultId }) => {
    const imgRef = useRef(null);
    const resultRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        const result = resultRef.current;
        const lens = document.createElement('div');

        lens.setAttribute('class', 'img-zoom-lens');
        img.parentElement.insertBefore(lens, img);

        const cx = result.offsetWidth / lens.offsetWidth;
        const cy = result.offsetHeight / lens.offsetHeight;

        result.style.backgroundImage = `url(${imgSrc})`;
        result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

        lens.addEventListener('mousemove', moveLens);
        img.addEventListener('mousemove', moveLens);

        lens.addEventListener('touchmove', moveLens);
        img.addEventListener('touchmove', moveLens);

        return () => {
            lens.removeEventListener('mousemove', moveLens);
            img.removeEventListener('mousemove', moveLens);
            lens.removeEventListener('touchmove', moveLens);
            img.removeEventListener('touchmove', moveLens);
        }
    }, [imgSrc, imgId, resultId]);

    function moveLens(e) {
        e.preventDefault();
        // ... rest of the moveLens function
    }

    return (
        <div className="img-zoom-container">
            <img id={imgId} ref={imgRef} src={imgSrc} />
            <div id={resultId} className="img-zoom-result" ref={resultRef} />
        </div>
    );
}

export default ImageZoom;