import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },

    {
      id: uuid(),
      name: 'Krillin',
      power: 5000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter = { id: uuid(), ...character };
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }
  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  constructor() {}
}
