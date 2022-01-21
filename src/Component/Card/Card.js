import React from 'react';

const Card = (props) => {
    const {name,img,price }=props.data
    console.log(props.data)
  return (
      
      <div>
        <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
          
      </div>
  );
};

export default Card;
