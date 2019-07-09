import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('The grass is greener where you water it', 'Maya Angelou', 'Macy Muhia', new Date(2019,3,14)),
    new Quote('YOLO', 'Elenor Roosevelt', 'Macy Muhia', new Date(2019,3,14)),
    new Quote('Imitation is suicide', 'Albert Einstein', 'Macy Muhia', new Date(2019,3,14)),
    new Quote('Peace begins with a smile', 'Mahatma Gandi', 'Macy Muhia', new Date(2018,3,4)),
    new Quote('Impossible is for the unwilling', 'Mother Teresa', 'Macy Muhia', new Date(2019,3,14)),
    new Quote('No pressure, no diamonds', 'Joel Osteen', 'Macy Muhia', new Date(2019,7,1))
  ];

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quoteName}" ?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
