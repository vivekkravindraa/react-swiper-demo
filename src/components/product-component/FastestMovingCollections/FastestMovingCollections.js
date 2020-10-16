import React, { Component } from 'react';
import vpLeftArrow from '../../../assets/images/vpLeftArrow/vpLeftArrow.png';
import vpRightArrow from '../../../assets/images/vpRightArrow/vpRightArrow.png';

import {
    fetchProductHighlights,
    fetchProductsByProductHighlightId
} from '../../../api/product-apis';

// import {
//     fastestMovingHighlightsItems,
//     fastestMovingProductsByHighlightsItems
// } from './FastestMovingCollectionsMockData';

import './FastestMovingCollections.scss';

class FeaturedProducts extends Component {

    constructor() {
        super();
        this.state = {
            // productHighlights: fastestMovingHighlightsItems,
            // fastestMovingProductsByHighlights: fastestMovingProductsByHighlightsItems,
            productHighlights: [],
            fastestMovingProductsByHighlights: []
        }
    }

    componentDidMount() {
        let storeId = "5f67bd164ca0e319e9e61668";

        fetchProductHighlights(storeId)
        .then((res) => {
            console.log('fastestMovingHighlightsInProFastestMoving', res.data.data);
            this.setState({ productHighlights: res.data.data });

            let fastestMoving = this.state.productHighlights.find((highlight) => {
                return highlight.productHighlightCode === "VPH03" ? highlight : null;
            });
            console.log('fastestMovingInProFastestMoving', fastestMoving);

            if(fastestMoving) {
                fetchProductsByProductHighlightId(fastestMoving.storeId, fastestMoving.id)
                .then((res) => {
                    console.log('fastestMovingProductsByHighlightsIDWithWebAddonInProFastestMoving', res.data.data);
                    this.setState({ fastestMovingProductsByHighlights: res.data.data });
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleRightClick = () => {
        document.getElementsByClassName('fastestMovingCollectionsItems')[0].scrollLeft += 275;
    }

    handleLeftClick = () => {
        document.getElementsByClassName('fastestMovingCollectionsItems')[0].scrollLeft -= 275; 
    }

    handleOnMouseOver = (productId) => {
        this.setState({ id: productId })
    }

    render() {
        return (
            <div className="fastestMovingCollectionsContainer">
                {/* ITERATING TO GET FASTEST MOVING HIGHLIGHTS */}
                {this.state.productHighlights.map((highlight, index) => {
                    return highlight.productHighlightCode === "VPH03" ?
                        <div className="fastestMovingCollectionsHeader" key={index}>
                            <p>{highlight.productHighlight}</p>
                            <p>{highlight.description}</p>
                        </div>
                    : null
                })}
                <div className="fastestMovingCollectionsViewAll">
                    <p>View All</p>
                </div>
                <div className="fastestMovingCollectionsItems">
                    {/* ITERATING OVER FASTEST MOVING PRODUCTS BY HIGHLIGHTS */}
                    {this.state.fastestMovingProductsByHighlights.map((product, index) => {
                        return (
                            <div key={index} className="fastestMovingCollectionsItem" onMouseOver={() => this.handleOnMouseOver(product.productId)}>

                                {/* Product Top - Small Image & Ratings */}
                                <div className="fastestMovingCollectionsProductTop">
                                    <div className="fastestMovingCollectionsProductThumbImage">
                                        <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${product.varients[0].image[1].media.media}`} alt="noImage" />
                                    </div>
                                    <div className="fastestMovingCollectionsProductRatings">
                                        <ul className="">
                                            <li className="">
                                                <svg viewBox="0 0 20.385 20.385" height="14px"> <g id="Group_2462" data-name="Group 2462" transform="translate(-828.004 -3124.946)"> <path className="outside" data-name="Path 2747" d="M838.2,3145.331c0-3.812-6.381-10.192-10.193-10.192,3.812,0,10.193-6.381,10.193-10.193,0,3.812,6.38,10.193,10.192,10.193C844.577,3135.139,838.2,3141.519,838.2,3145.331Z"/> <path className="inside" data-name="Path 2748" d="M838.2,3139.153c0-1.5-2.514-4.014-4.015-4.014,1.5,0,4.015-2.514,4.015-4.015,0,1.5,2.513,4.015,4.014,4.015C840.71,3135.139,838.2,3137.652,838.2,3139.153Z"/> </g> </svg>
                                            </li>
                                            <li className="">
                                                <svg viewBox="0 0 20.385 20.385" height="14px"> <g id="Group_2462" data-name="Group 2462" transform="translate(-828.004 -3124.946)"> <path className="outside" data-name="Path 2747" d="M838.2,3145.331c0-3.812-6.381-10.192-10.193-10.192,3.812,0,10.193-6.381,10.193-10.193,0,3.812,6.38,10.193,10.192,10.193C844.577,3135.139,838.2,3141.519,838.2,3145.331Z"/> <path className="inside" data-name="Path 2748" d="M838.2,3139.153c0-1.5-2.514-4.014-4.015-4.014,1.5,0,4.015-2.514,4.015-4.015,0,1.5,2.513,4.015,4.014,4.015C840.71,3135.139,838.2,3137.652,838.2,3139.153Z"/> </g> </svg>
                                            </li>
                                            <li className="">
                                                <svg viewBox="0 0 20.385 20.385" height="14px"> <g id="Group_2462" data-name="Group 2462" transform="translate(-828.004 -3124.946)"> <path className="outside" data-name="Path 2747" d="M838.2,3145.331c0-3.812-6.381-10.192-10.193-10.192,3.812,0,10.193-6.381,10.193-10.193,0,3.812,6.38,10.193,10.192,10.193C844.577,3135.139,838.2,3141.519,838.2,3145.331Z"/> <path className="inside" data-name="Path 2748" d="M838.2,3139.153c0-1.5-2.514-4.014-4.015-4.014,1.5,0,4.015-2.514,4.015-4.015,0,1.5,2.513,4.015,4.014,4.015C840.71,3135.139,838.2,3137.652,838.2,3139.153Z"/> </g> </svg>
                                            </li>
                                            <li className="">
                                                <svg viewBox="0 0 20.385 20.385" height="14px"> <g id="Group_2462" data-name="Group 2462" transform="translate(-828.004 -3124.946)"> <path className="outside" data-name="Path 2747" d="M838.2,3145.331c0-3.812-6.381-10.192-10.193-10.192,3.812,0,10.193-6.381,10.193-10.193,0,3.812,6.38,10.193,10.192,10.193C844.577,3135.139,838.2,3141.519,838.2,3145.331Z"/> <path className="inside" data-name="Path 2748" d="M838.2,3139.153c0-1.5-2.514-4.014-4.015-4.014,1.5,0,4.015-2.514,4.015-4.015,0,1.5,2.513,4.015,4.014,4.015C840.71,3135.139,838.2,3137.652,838.2,3139.153Z"/> </g> </svg>
                                            </li>
                                            <li className="r">
                                                <svg viewBox="0 0 20.385 20.385" height="14px"> <g id="Group_2462" data-name="Group 2462" transform="translate(-828.004 -3124.946)"> <path className="outside" data-name="Path 2747" d="M838.2,3145.331c0-3.812-6.381-10.192-10.193-10.192,3.812,0,10.193-6.381,10.193-10.193,0,3.812,6.38,10.193,10.192,10.193C844.577,3135.139,838.2,3141.519,838.2,3145.331Z"/> <path className="inside" data-name="Path 2748" d="M838.2,3139.153c0-1.5-2.514-4.014-4.015-4.014,1.5,0,4.015-2.514,4.015-4.015,0,1.5,2.513,4.015,4.014,4.015C840.71,3135.139,838.2,3137.652,838.2,3139.153Z"/> </g> </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Product Big Image */}
                                <div className="fastestMovingCollectionsProductImage">
                                    <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${product.varients[0].image[1].media.media}`} alt="noImage" />
                                </div>

                                {/* Product Name, Description, Price & Sales Price */}
                                <div className="fastestMovingCollectionsProductInfo">
                                    <p className="fastestMovingCollectionsProductName">
                                        {product.productName}
                                        <span className="fastestMovingCollectionsBrandName">{}</span>
                                    </p>
                                    <p className="fastestMovingCollectionsProductDescription">
                                        {product.shortDescription}
                                    </p>
                                    <p className="fastestMovingCollectionsProductPrice">
                                        AED <span>{product.varients[0].price}</span>
                                    </p>
                                    <p className="fastestMovingCollectionsProductSalesPrice">
                                        AED <span>{product.varients[0].salesPrice}</span>
                                    </p>
                                </div>

                                {/* Product Bottom - On Hover Icons */}
                                <div className="fastestMovingCollectionsProductBottom" style={{ display: this.state.id !== product.productId ? `none` : `grid` }}>
                                    <div className="fastestMovingCollectionsProductViewDetail">
                                        <svg viewBox="0 0 32.714 29.376" height="20px">
                                            <g id="g-eye" data-name="g-eye" transform="translate(-261.955 -3579.124)">
                                                <g id="g-eye" data-name="g-eye">
                                                    <path id="Path_2790" data-name="Path 2790" d="M262.54,3608.5H273.3v-1.168H263.124v-9.6h-1.169v10.182A.585.585,0,0,0,262.54,3608.5Z" fill="#bdbdbd"/>
                                                    <path id="Path_2791" data-name="Path 2791" d="M294.669,3607.916v-10.182l-1.168.005v9.593H283.319v1.168h10.766A.585.585,0,0,0,294.669,3607.916Z" fill="#bdbdbd"/>
                                                    <path id="Path_2792" data-name="Path 2792" d="M293.5,3589.806h1.168v-10.1a.585.585,0,0,0-.584-.585H283.319v1.169H293.5Z" fill="#bdbdbd"/>
                                                    <path id="Path_2793" data-name="Path 2793" d="M263.124,3580.293H273.3v-1.169H262.54a.585.585,0,0,0-.585.585v10.181h1.169Z" fill="#bdbdbd"/>
                                                </g>
                                                <path id="Path_2794" data-name="Path 2794" d="M288.661,3596.388c-2.284,2.249-6.065,5.155-10.349,5.155-6.987,0-12.636-7.731-12.636-7.731s5.649-7.73,12.636-7.73,12.636,7.73,12.636,7.73A23.353,23.353,0,0,1,288.661,3596.388Z" fill="#cccece"/>
                                                <path id="Path_2795" data-name="Path 2795" d="M283.319,3593.812a5.007,5.007,0,1,1-5.007-5.007A5.006,5.006,0,0,1,283.319,3593.812Z" fill="#bdbdbd"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="fastestMovingCollectionsProductShoppingBag">
                                        <svg viewBox="0 0 39.332 57.386" height="32px">
                                            <g transform="translate(-359.105 -3561.508)">
                                                <g id="g-arrow">
                                                    <g transform="translate(-6 -13)">
                                                        <g id="Group_3242" data-name="Group 3242" transform="translate(0 9)">
                                                            <circle id="Ellipse_480" data-name="Ellipse 480" cx="7.586" cy="7.586" r="7.586" transform="translate(377.186 3565.508)" fill="#71c285"/>
                                                            <path id="Path_2787" data-name="Path 2787" d="M384.771,3578.71a.948.948,0,0,1-.948-.949v-9.336a.948.948,0,0,1,1.9,0v9.336A.947.947,0,0,1,384.771,3578.71Z" fill="#fff"/>
                                                            <path id="Path_2788" data-name="Path 2788" d="M384.771,3578.71a.948.948,0,0,1-.67-1.619l4.085-4.085a.948.948,0,0,1,1.34,1.341l-4.084,4.085A.946.946,0,0,1,384.771,3578.71Z" fill="#fff"/>
                                                            <path id="Path_2789" data-name="Path 2789" d="M384.771,3578.71a.944.944,0,0,1-.67-.278l-4.085-4.085a.948.948,0,1,1,1.341-1.341l4.085,4.085a.948.948,0,0,1-.671,1.619Z" fill="#fff"/>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g id="g-bag">
                                                    <g transform="translate(-6 -5)">
                                                        <path id="eye-2" data-name="eye" d="M402.45,3590.353H367.092l-1.983,30.9a2.524,2.524,0,0,0,2.479,2.644h34.367a2.523,2.523,0,0,0,2.478-2.644Z" fill="#3dc9ae"/>
                                                        <path id="Path_2786" data-name="Path 2786" d="M384.771,3612.411c-5.37,0-9.583-7.435-9.583-17.018a.661.661,0,1,1,1.322,0c0,8.674,3.717,15.7,8.261,15.7s8.262-7.022,8.262-15.7a.661.661,0,1,1,1.321,0C394.354,3604.976,390.141,3612.411,384.771,3612.411Z" fill="#fff"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="fastestMovingCollectionsProductWishlist">
                                        <svg viewBox="0 0 30.285 25.335" height="20px">
                                            <g id="g-favourite" data-name="g-favourite" transform="translate(-479.169 -3581.8)">
                                                <path id="Path_2778" data-name="Path 2778" d="M507.261,3583.994h0a7.493,7.493,0,0,0-10.6,0l-1.653,1.653a1.009,1.009,0,0,1-1.427,0l-1.626-1.626a7.491,7.491,0,0,0-10.6,0h0a7.491,7.491,0,0,0,0,10.595l12.222,12.223a1.01,1.01,0,0,0,1.427,0l12.247-12.249A7.494,7.494,0,0,0,507.261,3583.994Z" fill="#cccece"/>
                                                <path id="Path_2779" data-name="Path 2779" d="M485.283,3594.616a7.491,7.491,0,0,1,0-10.595h0a7.452,7.452,0,0,1,3.338-1.933,7.488,7.488,0,0,0-7.257,1.933h0a7.491,7.491,0,0,0,0,10.595l12.222,12.223a1.011,1.011,0,0,0,1.428,0l1.245-1.246Z" fill="#bdbdbd"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
                <div className="fastestMovingCollectionsLeftArrow" onClick={() => this.handleLeftClick()}>
                    <img src={vpLeftArrow} alt="noImage" height="16" />
                </div>
                <div className="fastestMovingCollectionsRightArrow" onClick={() => this.handleRightClick()}>
                    <img src={vpRightArrow} alt="noImage" height="16" />
                </div>
            </div>
        );
    }
}

export default FeaturedProducts;
