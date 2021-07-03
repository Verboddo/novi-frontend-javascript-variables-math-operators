function strongestPokemon(pokemon, strongest) {
    for (let i = 0; i < pokemon.length; i++) {
        const currentPokemon = pokemon[i]
        if ( currentPokemon.pokemon === strongest ) {
            return currentPokemon
        }
    }
}

module.exports = {
    strongestPokemon: strongestPokemon
}