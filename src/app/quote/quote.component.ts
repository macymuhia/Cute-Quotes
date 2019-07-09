import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('The grass is greener where you water it', 'Maya Angelou', 'Macy Muhia'),
    new Quote('YOLO', 'Elenor Roosevelt', 'Macy Muhia'),
    new Quote('Imitation is suicide', 'Albert Einstein', 'Macy Muhia'),
    new Quote('Peace begins with a smile', 'Mahatma Gandi', 'Macy Muhia'),
    new Quote('Impossible is for the unwilling', 'Mother Teresa', 'Macy Muhia'),
    new Quote('No pressure, no diamonds', 'Joel Osteen', 'Macy Muhia')
  ];

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  constructor() { }

  ngOnInit() {
  }

}
