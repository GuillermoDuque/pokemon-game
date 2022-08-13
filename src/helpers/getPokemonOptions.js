import pokemonApi from '@/api/pokemonApi'


const getPokemons = () => {
    const  pokemonsArr= Array.from(Array(650))
    
    return pokemonsArr.map( ( _ , index ) => index + 1 )
}

const getPokemonOptions = async() =>{

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
   
   const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )
 //  console.table(pokemons)
   return pokemons
   
}

const getPokemonNames= async( [poke1,poke2,poke3,poke4] = []) =>{

    const promiseArr =[
        pokemonApi.get(`/${ poke1 }`),
        pokemonApi.get(`/${ poke2 }`),
        pokemonApi.get(`/${ poke3 }`),
        pokemonApi.get(`/${ poke4 }`)

    ]

    const  [p1,p2,p3,p4] = await Promise.all( promiseArr )



    return[
        { name: p1.data.name, id: p1.data.id},
        { name: p2.data.name, id: p2.data.id},
        { name: p3.data.name, id: p3.data.id},
        { name: p4.data.name, id: p4.data.id},
    ]
}

    
export default getPokemonOptions