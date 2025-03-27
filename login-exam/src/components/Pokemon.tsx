import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Pokemon = () => {
    const {id} = useParams()
    return(
        <>
            <h1 className="text-white text-6xl">{id}</h1>
        </>
    )
}

export default Pokemon