import { useState } from "react";


function Card({id,image,info,price,name,removeTour}) {
    
    const[readmore,setReadmore] = useState(false);
    const desciption = readmore ? info : `${info.substring(0,200)}....`
        
    function readmorehandler() {
        setReadmore(!readmore);
    }

    
    return (
        <div className="card">

            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div> 
            
                <div className="description">
                    {desciption}
                    <span className="read-more" onClick = {readmorehandler}>
                    {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;