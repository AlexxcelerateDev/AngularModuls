import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  characeterList: Character[] = [{ name: 'Trunk', power: 10 }];
  @Output()
  onDeleteCharacterByIdEvent: EventEmitter<string> = new EventEmitter();

  deleteChracterById(id?: string): void {
    if (!id) {
      return;
    }
    this.onDeleteCharacterByIdEvent.emit(id);
  }
}
