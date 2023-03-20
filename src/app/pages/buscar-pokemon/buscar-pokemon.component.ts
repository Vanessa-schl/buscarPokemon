import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../interface/interfaces';
import { PokemonDetails } from '../../interface/interfaces';


@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.scss']
})
export class BuscarPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  selectedPokemonDetails: PokemonDetails | null = null;
  searchQuery: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ results: Pokemon[] }>('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .subscribe(data => {
        this.pokemonList = data.results;
        this.filteredList = data.results;
      });
  }

  search(): void {
    if (!this.searchQuery) {
      this.filteredList = this.pokemonList;
    } else {
      this.filteredList = this.pokemonList.filter(pokemon => pokemon.name.includes(this.searchQuery));
    }
  }
  

  selectPokemon(pokemon: Pokemon): void {
    this.http.get<PokemonDetails>(pokemon.url)
      .subscribe(data => {
        const abilities = data.abilities.map(ability => ({ ability: { name: ability.ability.name } }));
        
        this.selectedPokemonDetails = {
          name: data.name,
          height: data.height ,
          abilities: abilities
        };
      });
  }
  
  }