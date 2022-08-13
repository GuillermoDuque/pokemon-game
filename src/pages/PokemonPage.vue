<template>
  <h1>¿Quién es ese pokemon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="false" />
  <PokemonOption :pokemons="pokemonArr"/>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOption from '@/components/PokemonOption.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log( getPokemonOptions() )

export default {
    components:{PokemonPicture, PokemonOption},
    data(){
      return{
        pokemonArr: []
      }
    },
    methods:{
      async mixPokemonArray(){
          this.pokemonArr = await getPokemonOptions() 
          console.log(this.pokemonArr)
      }
    },
    mounted(){
      this.mixPokemonArray()
    }

}
</script>

