import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  template: `
    <form class="row" (ngSubmit)="emitCharacter()">
      <h4>Agregar personaje</h4>
      <input
        type="text"
        [(ngModel)]="character.name"
        name="name"
        class="form-control mb-2"
        placeholder="Nombre"
      />
      <input
        type="number"
        [(ngModel)]="character.power"
        name="power"
        class="form-control mb-2"
        placeholder="Poder"
      />
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
    <!-- <pre>{{ character | json }}</pre> -->
  `,
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
