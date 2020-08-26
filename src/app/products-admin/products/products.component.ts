import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  heroes: item[] = [
    {
      id: 11,
      name: 'tiger',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 12,
      name: 'Narco',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },

    {
      id: 13,
      name: 'Bombasto',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 14,
      name: 'Celeritas',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 12,
      name: 'Narco',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 13,
      name: 'Bombasto',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 14,
      name: 'Celeritas',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 12,
      name: 'Narco',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 13,
      name: 'Bombasto',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 14,
      name: 'Celeritas',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
    {
      id: 12,
      name: 'Narco',
      price: 45,
      category: 'cookies',
      discountPrice: 43,
      description: 'offer',
    },
  ];

  selectedHero: item;

  ngOnInit(): void {}
  onSelect(hero: item): void {
    this.selectedHero = hero;
  }
}
interface item {
  id: number;
  name: string;
  price: number;
  category: string;
  discountPrice: number;
  description: string;
}
