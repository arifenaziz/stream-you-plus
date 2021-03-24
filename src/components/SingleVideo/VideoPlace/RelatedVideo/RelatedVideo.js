import RelatedVideoSingle from "./RelatedVideoSingle/RelatedVideoSingle";

const RelatedVideo = ({details}) => {



    return (
        <>
            {
            details?.length ?(    
            details.map((item,index)=>(
                <RelatedVideoSingle item={item} key={index}/>
            ))

            ):<p className="no-found-text">No videos Found</p>
            
            }

        </>
    )
}

export default RelatedVideo;