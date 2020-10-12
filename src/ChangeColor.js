import React, { useEffect, useState } from 'react';


const ChageColor = () => {

    const [headingColor, setHeadingColor] = useState('green');
    const [headingText, setHeadingText] = useState('Tekst nagłówka');
    const [headingId, setHeadingId] = useState('1');


    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + headingId)
        .then(response => response.json())
        .then(post => {
            setHeadingText(post.title)
        });
    }

    useEffect(()=>{
        getData();
    },[headingId])

    return(
        <div>
            <h1 className={headingColor}>{headingText}</h1>

            <button onClick={()=>setHeadingColor('red')}>red</button>
            <button onClick={()=>setHeadingColor('green')}>green</button>
            <button onClick={()=>setHeadingColor('blue')}>blue</button>
            <button onClick={()=>setHeadingId('1')}>Text1</button>
            <button onClick={()=>setHeadingId('2')}>Text2</button>
            <button onClick={()=>setHeadingId('3')}>Text3</button>
            
        </div>
    )
}

export default ChageColor;


