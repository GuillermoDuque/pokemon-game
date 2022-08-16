import pokemonApi from '@/api/pokemonApi'



 /* eslint-disable no-undef */
describe('pokemonApi', () => {

    test('axios debe de estar configurado con el api de pokemon', () =>{
              
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
        
        })
})