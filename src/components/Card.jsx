import React from "react";

function Card(props){
     const{category,company,description,image,price,updatedAt, } = props.attributes;
     return(
          <div className="w-1/4 flex flex-wrap flex-col items-center">
               <img src={image} className="w-full "/>
               <h1>{company}</h1>
               <p>{category}</p>
               <p>{description}</p>
               <p>{price}</p>
               <p>{updatedAt}</p>
          </div>
     )
}

export default Card;