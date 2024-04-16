export const dicesInfo = [
    {id:1, number:1, locked: false},
    {id:2, number:2, locked: false},
    {id:3, number:3, locked: false},
    {id:4, number:4, locked: false},
    {id:5, number:5, locked: false},
    {id:6, number:6, locked: false},
    {id:7, number:1, locked: false},
    {id:8, number:2, locked: false},
    {id:9, number:3, locked: false},
    {id:10, number:4, locked: false}
]


export function GenDicesBox(props){
    let styles = {
        backgroundColor: props.locked ? "#808080" : "white"
    }
    return(
        <div>
            <div className="diceBox" id={props.id} onClick={props.handleClickDice}
                style={styles} key={props.id}>
                {props.number} 
            </div>
            
        </div>
    )
}