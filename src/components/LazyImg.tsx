import React from 'react';
import poster from "../images/슬의.avif"

const LazyImage = () => {
    return (
        <img id="poster" width="400" height="282" loading="lazy" src={poster} alt={'슬의'}/>
);
};

export default LazyImage;
