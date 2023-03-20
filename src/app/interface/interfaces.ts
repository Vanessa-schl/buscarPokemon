export interface Pokemon{
    name: string;
    url: string;
}



export interface PokemonDetails {
    name: string;
    height : string;
    abilities: Array<{ability: {name: string}}>;
}



