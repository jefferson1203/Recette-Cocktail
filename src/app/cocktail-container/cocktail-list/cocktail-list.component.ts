import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent implements OnInit {
  constructor() {}
  @Input() public cocktails?: Cocktail[];
  @Output() private changecocktail: EventEmitter<number> =
    new EventEmitter<number>();

  public selectedCocktail(index: number): void {
    this.changecocktail.emit(index);
  }

  ngOnInit(): void {}
}
