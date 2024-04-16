// import React, { useState } from 'react';

export const boxes = [
    {id:1, on: true},
    {id:2, on: true},
    {id:3, on: false},
    {id:4, on: false},
    {id:5, on: true},
    {id:6, on: false},
]

export function Box(props){
    // const [on, setOn] = useState(props.on)

    let styles = {
        backgroundColor: props.on 
            ? "#222222" : "transparent"
    }
    // function clickSquare(){
    //     setOn(prevOn => !prevOn)
    // }
 return (
    <div key={props.id} 
        className='divBoxes' 
        // onClick={clickSquare}
        style={styles}
        onClick={props.handleClick}
        >
    </div>
 )
}

