import React, { useState } from 'react';

export const jokeContent = [
    {punch:"123",content:"sgfjsy"},
    {content:"cxgdsfg"},
    {punch:"234",content:"shjfsj"},
    {punch:"345",content:"gidgi"}
]


export function Jokes(props){

    const [isShown, setIsShown] = useState(false)

    function togglesJokes(){
        setIsShown(!isShown)
    }

    return (
        <div className='divJokes'>
            {props.punch && <h3>{props.punch}</h3>}
            {isShown && <p>{props.content}</p>}
            <button onClick={togglesJokes}>
                {isShown ? "Hide content" : "Show content"} 
                </button>
        </div>
    ) 










}

