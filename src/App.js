import {travelData, Top, Travel} from './JS/travelData.js'
import React, { useState } from 'react';
import {boxes, Box} from './JS/boxes.js'
import { jokeContent, Jokes } from './JS/jokes.js';
import { HandleChange } from './JS/form.js';
import { Login } from './JS/login.js';
import { dicesInfo, GenDicesBox } from './JS/diceGame.js';

  function Intro_box() {



    const [first, setfirst] = useState({
      firstName: "Tom",
      lastName: "Dune",
      isTrue: true
    })

    let changeFirstPic = first.isTrue 
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1599px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg" 
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/1280px-Sydney_Australia._%2821339175489%29.jpg"

    function clickPic(){
      setfirst(objectsFirst => {   // objectsFirst is an object
        return {
          ...objectsFirst,
          isTrue: !objectsFirst.isTrue
        }
      })
    }

    const cards = travelData.map(item => {
      return (
        <Travel 
          key = {item.id}
          {...item}
        />
      )
    })


    const genJokes = jokeContent.map(item => {
      return (

        <Jokes
         punch = {item.punch}
         content = {item.content}
         />
      )
    })




    const [squares, setSquares] = useState(boxes)

    function clickSquare(id) {
      setSquares(squareObjects => {    // squareObjects is an array with 6 ojects
        return squareObjects.map(element => (
           element.id === id ? {...element, on: !element.on} : element
        ))
      }) 
    }

    const genSquares = squares.map(item => (
        <Box 
          id={item.id}
          on={item.on}
          handleClick={() => clickSquare(item.id)}
        />
      )
    )

      const [background, setBackground] = useState(false)

      function toggleBackground() {
        setBackground(!background)
      }

    
      const [dices, setDices] = useState(dicesInfo)

      function toggleDices(id){  // click dice box to lock number
        setDices(dicesObjects => { return dicesObjects.map( diceObject => (
          diceObject.id === id ? 
            {...diceObject, locked: !diceObject.locked} : diceObject 
        ))
        })
      }

      function handleClickButton(){
        setDices(  // return new dices number with locked = false
          dicesObjects => { return dicesObjects.map( diceObject => (
            diceObject.locked ? diceObject : {...diceObject, number: 
              (Math.floor(Math.random() * 6) + 1)} ))
          }
        )
        //checkDiceWin(dices)
      }

      function checkDiceWin(dices) {
        const firstNumber = dices[0].number;
        const allEqual = dices.every(dice => dice.number === firstNumber);
    
        return allEqual 
    }


      const diceBoxes = dices.map((item) => {   // generate HTML div for each dices
        return (
          <GenDicesBox 
            key= {item.id}
            id= {item.id}
            number= {item.number}
            locked= {item.locked}
            handleClickDice={() => toggleDices(item.id)}
          />
          
        )
      })





    return (
      <div className="Intro_box" 
        style={{backgroundColor: background ? "black" : "white", 
        color: background ? "white" : "black"}}>
        <button onClick={toggleBackground}>
          {background? "Switch to white" : "Switch to black"}
        </button>
        <Top />
        {cards}
        <hr/>
        <button onClick={clickPic}> 
          Try click me!
        </button>
        <img className="travelImg" 
          src={changeFirstPic} alt={changeFirstPic}/>
        <div>
          {genSquares}
        </div>
        <div>
          {genJokes}
        </div>
        <HandleChange />
        <div><hr/><hr/><hr/><hr/></div>
        <Login />
        <div className='diceBoxes'>
          {diceBoxes}
          <button onClick={handleClickButton}
            className='diceButton'>Roll Dices</button>
          <h3>{checkDiceWin(dices)? "You won!": "Try again"}</h3>
        </div>
      </div>
    )
  }



export default Intro_box;
