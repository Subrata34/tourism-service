import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Header from '../Header/Header';
import  img01 from '../image/img01.jpg'
import  img02 from '../image/img02.jpg'
import  img03 from '../image/img03.jpg'
import  img04 from '../image/img04.jpg'

const Service = () => {
    const products=[
        {
         name:"small shoes",
         img:img01,
         price:"$100"
        },
        {
         name:"s shoes",
         img:img02,
         price:"$100"
        },
        {
         name:"small shoes",
         img:img03,
         price:"$105"
        },
        {
         name:"small shoes",
         img:img04,
         price:"$100"
        }
      
    ];
    const [person,setPerson]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>{
            setPerson(data)
            console.log(data)})
    },[])
    return (
        <div>
            <Header></Header>
            
            {
                person.map(data=><Card
                data={data}
                ></Card>)
            }
        </div>
    )
}

export default Service
