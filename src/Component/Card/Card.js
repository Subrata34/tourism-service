import React from 'react';

const Card = (props) => {
    const {name,img,price }=props.data
    console.log(props.data)
  return (
      
      <div>
          <h1>Our Products Service </h1>
          <div>
              <h1>{name}</h1>
          </div>
          
      </div>
  );
};

export default Card;
