import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import CategorySliderSingle from './CategorySliderSingle/CategorySliderSingle';

const CategorySlider = ({cdata}) => {


    const options = {
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:3,
                nav:false
            },
            1000: {
              items: 4,
            },
            1200: {
              items: 8,
            },
          },                
        loop: true,
        lazyLoad: true,
        autoplay: true,
        // autoplaySpeed: 1000,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText:["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],

    };


    return(
        <div className="top-category section-padding mb-4">
        <div className="row">
           <div className="col-md-12">
              <div className="main-title">
                 <h6>Channels Categories</h6>
              </div>
           </div>
           <div className="col-md-12">              

<OwlCarousel
className="owl-carousel owl-theme"
options={options}
>              
{
    cdata.map((item,index)=>(
    <CategorySliderSingle item={item} key={index}/>         
    ))
}

</OwlCarousel>

              {/* </div> */}
           </div>
        </div>
     </div>

    )
}

export default CategorySlider;