import  getPokemonOptions, { getPokemons, getPokemonNames }  from  '@/helpers/getPokemonOptions'
 
 
 /* eslint-disable no-undef */
describe('getPokemonOptions helpers', () => {

    test('debe de regresar un arreglo de numeros', () =>{
          
        const pokemons = getPokemons()

        expect( pokemons.length ).toBe( 650 )
        expect( pokemons[0] ).toBe( 1 )
        expect( pokemons[500] ).toBe( 501 )
        
    })

    test('debe se retornar un arreglo de 4 elementos con nombres diferentes', async () =>{
          
        const  pokemons = await getPokemonNames([1,2,3,4])

       
        expect( pokemons[0].name ).toBe( 'bulbasaur' )
        expect( pokemons[3].name ).toBe( 'charmander' )
        expect( pokemons[2].name ).toBe( 'venusaur' ) 

        expect( pokemons ).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])
        
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado',  async () =>{
          
       const pokemons = await getPokemonOptions()

       expect( pokemons.length ).toBe(4)

       expect( pokemons ).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
       ])
        
     })
        
})