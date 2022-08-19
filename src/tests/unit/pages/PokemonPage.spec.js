import {shallowMount} from '@vue/test-utils'
import PokemonPage  from '@/pages/PokemonPage'
 /* eslint-disable no-undef */
describe('PokemonPageComponent', () =>{

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    }) 
    
   

    test('debe de hacer match con el snapshot', () =>{
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de llamar al mixPokemonArray al montar', () =>{
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        shallowMount(PokemonPage)
        expect( mixPokemonArraySpy ).toHaveBeenCalled
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () =>{
        
    })
  

})