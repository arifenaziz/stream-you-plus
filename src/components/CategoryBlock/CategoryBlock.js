import React,{ useState } from "react";
import CategoryBlockSingle from "./CategoryBlockSingle/CategoryBlockSingle";

const CategoryBlock = ({data}) => {


    return(
        <div className="video-block section-padding">
        <div className="row">
           <div className="col-md-12">
              <div className="main-title">
              <h6>Categories</h6>
              </div>
            </div>

        {
            data?.length ?(
            data.map((item,index)=>(
                <CategoryBlockSingle item={item} key={index}/>
            ))
            ) : <p className="no-found-text">No Channel Found</p>
        }


        </div>
        </div>
    )
}

export default CategoryBlock;