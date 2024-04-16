import React from 'react';


export const travelData = [
    {id:1, country:"JAPAN", place:"Mount Fuji", 
        time:"12 Jan, 2021 - 24 Jan, 2021", 
        description:"Mount Fuji is the tallest mountain in Japan", 
        googleMapLink:"", photoLink:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1599px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg"},
    {id:2, country:"AUSTRALIA", 
        place:"Sydney Opera House", 
        time:"27 May, 2021 - 8 Jun, 2021", 
        description:"The sydney Opera House is a multi....", 
        googleMapLink:"",photoLink:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/1280px-Sydney_Australia._%2821339175489%29.jpg"},
    {id:3, country:"NORWAY", 
        place:"Geirangerfjord", 
        time:"01 Oct, 2021 - 18 Nov, 2021", 
        description:"XXXXXXXXXXXHHHHHHHHHHHHYYYYYYYYY", 
        googleMapLink:"",photoLink:"https://upload.wikimedia.org/wikipedia/commons/4/46/Geirangerfjord_.jpg"},
]
  


export function Top(){

    let logoLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRaGEb-Z3FiX5z2fVlLKPNggJQOpY3oQtFyt658hOAZa6u9tZkx2LzYPz07BtxI2JzsE&usqp=CAU"

    return (
        <div className="topHeader">
            <img className="icon" src={logoLink} alt="my travel journal"/>
            <p> my travel journal</p>
        </div>
    )
}

export function Travel(props){
    return (
        <div>
            <div className="contentDiv">
                
                <img src={props.photoLink}
                    className="travelImg" alt="travelPhoto"/>
                
                <div className="traveConetent">    
                    <p className="countryTitle">{props.country} 
                        <a href={props.googleMapLink} className="googleMapLink"> 
                        View on Google map
                        </a>
                    </p>
                    <h1>{props.place}</h1>
                    <h3>{props.time}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr size="1" color="grey" />
        </div>

    )
}