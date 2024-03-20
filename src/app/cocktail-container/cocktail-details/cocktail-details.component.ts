import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent implements OnInit {
  @Input() public cocktail!: Cocktail;

  constructor() {}

  ngOnInit(): void {}
}
