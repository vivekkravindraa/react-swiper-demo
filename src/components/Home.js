import React from 'react';

import TopCollections from './product-component/TopCollections/TopCollections';
import FeaturedCollections from './product-component/FeaturedCollections/FeaturedCollections';
import FastestMovingCollections from './product-component/FastestMovingCollections/FastestMovingCollections';

export default function Home() {
    return (
        <div>
            <TopCollections />
            <FeaturedCollections />
            <FastestMovingCollections />
        </div>
    )
}
