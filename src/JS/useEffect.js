import { useEffect, useState } from "react";

export function UseEffect() {
    const [fetchData, setFetchData] = useState({})
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("count")}, [count]
    )
    return null
}


