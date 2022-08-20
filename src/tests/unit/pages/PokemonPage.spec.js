import {shallowMount} from '@vue/test-utils'
import PokemonPage  from '@/pages/PokemonPage'
import { mockPokemons } from '../mocks/pokemons.mock'
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
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0], 
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
  
    test('debe de mostrar los componentes de pokemonPicture y pokemonOption', () =>{
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0], 
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options= wrapper.find('pokemon-option-stub')
         
        expect(picture.exists()).toBeTruthy
        expect(options.exists()).toBeTruthy

        expect(picture.attributes('pokemonid')).toBe('1')
        expect(options.attributes('pokemons')).toBeTruthy()

    })

    test('pruebas con checkAnswer', async () =>{
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0], 
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect( wrapper.find('h2').text()).toBe(`Correcto, ${ mockPokemons[0].name }`) 

        await wrapper.vm.checkAnswer(10)
        expect( wrapper.vm.message ).toBe(`Oops, era ${ mockPokemons[0].name }`) 

    })


})