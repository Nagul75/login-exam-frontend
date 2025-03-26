import Header from "./components/ui/Header"
import Sidebar from "./components/ui/Sidebar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "./components/ui/card"
import axios from 'axios'

function Home() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [pokemonData, setPokemonData] = useState([])


  useEffect(()=> {
    axios.get('http://127.0.0.1:8000/check-auth/', {withCredentials: true})
      .then( res => {
        if(res.data.authenticated) {
          setLoggedIn(true)
        } else {
          navigate("/login")
        }
      })
      .catch(() => {
        setLoggedIn(false)
        navigate("/login")
      })
  }, [])

  useEffect(()=> {
    axios.get('http://127.0.0.1:8000/')
      .then((res) => {
          setPokemonData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <>
    {console.log(pokemonData[0])}
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={loggedIn}></Header>
      <div className="flex-1 flex mt-5 overflow-hidden">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-40 mt-18">
          <h1 className="text-white">This is just <strong className="text-fuchsia-700">dummy data sent from the server.</strong> The data was obtained from poke-api and was used to populate the table in the database.</h1>
          <h1 className="text-white mb-4">This is just for demonstration purposes and the data can be anything.</h1>
          <ul className="flex flex-wrap gap-4">
            {pokemonData.map((pokemon, index) => (
                <Card key={index} className="h-40 bg-stone-900 border-stone-700 mb-4 w-100">
                  <div className="flex gap-4 justify-start">
                    {pokemon.image_url ? (
                      <img className="h-32 w-32 ml-10" src={pokemon.image_url}
                      alt={pokemon.name}
                      />
                    ) : (<p>No Image available</p>)}
                    <div className="flex flex-col gap-1">
                      <h1 className="font-bold text-2xl text-fuchsia-700">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                      <p className="text-white">Poke-API ID: {pokemon.id}</p>
                      <p className="text-white">Height: {pokemon.height}</p>
                      <p className="text-white">Weight: {pokemon.weight}</p>
                    </div>
                  </div>
                </Card>
            ))}
          </ul>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home
