import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss',
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    {
      name: 'mojito',
      img: 'https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description:
        'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
    },
    {
      name: 'poto',
      img: 'https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description:
        'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
    },
    {
      name: 'roro',
      img: 'https://static.750g.com/images/640-420/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description:
        'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
    },
  ];

  public selectedCocktail: Cocktail = this.cocktails[0];

  constructor() {}

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  public selectCocktail(index: number) {
    this.selectedCocktail = this.cocktails[index];
  }
}
