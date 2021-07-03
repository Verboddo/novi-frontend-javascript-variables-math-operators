const { strongestPokemon } = require('../index')


test('Snorlax is de sterkste', function () {
    // Arrange
    const pokemon = [
        {pokemon: 'pickachu', battlePower: 120},
        {pokemon: 'charmender', battlePower: 100},
        {pokemon: 'bulbasaur', battlePower: 90},
        {pokemon: 'snorlex', battlePower: 140},
        ]

    const strongest = 'snorlex'
    // Act
    const result = strongestPokemon(pokemon, strongest)

    // Assert
    expect(result).toEqual( {pokemon: 'snorlex', battlePower: 140 })
})

