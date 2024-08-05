import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames = ['ironman', 'spiderman', 'batman', 'superman', 'wonderwoman'];
  deleteHero?: string;
  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
