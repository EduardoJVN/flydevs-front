const {getPokemons,searchPokemons} = require('./index')

it("getPokemons should return a list of 20 pokemons", async ()=>{
    const response = await getPokemons();
    expect(response).toBeDefined()
    expect(response).not.toBeNull()
    expect(response.message.length).toEqual(20)
})


it("searchPokemons should bring an array with the pokemons according to the parameter set by the user", async ()=>{
    const parameters = [
        "pika",
        "ditto",
        "bulbasaur",
        "charizard",
        "+",
        ""
    ]
    for(let index in parameters){
        const response = await searchPokemons(parameters[index]);
        expect(response).toBeDefined()
        expect(response).not.toBeNull()
        if(index == 4){
            expect(response.message.length).toEqual(0)
        }else{
            expect(response.message.length).toBeGreaterThanOrEqual(1)
        }
    }
    
})