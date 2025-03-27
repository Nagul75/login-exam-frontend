import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";
import axios from "axios";

const Pokemon = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        setError(`Failed to fetch user data`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Loading Pokémon data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <div className="flex flex-col">
        <Header title="Generic Website" loggedIn={false}></Header>
        <div className="flex-1 flex mt-5 overflow-hidden">
          <Sidebar></Sidebar>
          <main className="flex-1 p-4 mt-18">
            <Card className="bg-stone-900 border-stone-700 p-6 w-125 ml-105 flex flex-col justify-center items-center">
              <h1 className="font-bold text-4xl text-fuchsia-700">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h1>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="h-30 w-30"
              />
              <div className="flex justify-between gap-28 border-2 border-t-stone-800 border-stone-900 pt-4">
                <div className="text-xl">
                    <p className="text-white">Height: {pokemon.height / 10} m</p>
                    <p className="text-white">Weight: {pokemon.weight / 10} kg</p>
                    <p className="text-white">
                    Base Experience: {pokemon.base_experience}
                    </p>
                </div>
                <div className="text-xl">
                  <h2 className=" text-fuchsia-500">Abilities:</h2>
                  <ul className="text-white">
                    {pokemon.abilities.map((ability, index) => (
                      <li key={index}>{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
